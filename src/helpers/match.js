function simulateMatch(team1, team2) {
    const positionsImportance = {
        goalkeeper: { goalKeeping: 5, stability: 3, control: 2 },
        'defender central': { steal: 4, stability: 5, control: 2, pass: 1, speed: 1, shoot: 0.5 },
        'lateral left': { speed: 4, control: 3, steal: 3, pass: 2, stability: 2, shoot: 1, effect: 1 },
        'lateral right': { speed: 4, control: 3, steal: 3, pass: 2, stability: 2, shoot: 1, effect: 1 },
        'midfielder defensive': { pass: 4, control: 3, steal: 3, speed: 2, shoot: 1, stability: 2 },
        'midfielder offensive': { pass: 4, control: 4, shoot: 3, speed: 3, stability: 1, effect: 1 },
        winger: { speed: 5, control: 4, pass: 3, shoot: 2, effect: 1, stability: 1 },
        forward: { shoot: 5, speed: 4, control: 3, pass: 2, stability: 1, effect: 1 }
    };

    function calculateStatScore(player, importance) {
        let score = 0;
        for (let stat in importance) {
            score += player.stats[stat] * importance[stat];
        }
        return score;
    }

    function calculatePerformanceAdjustedScore(player, importance) {
        const baseScore = calculateStatScore(player, importance);
        const performanceFactor = player.performance / 100;
        const conditionFactor = player.condition / 100;
        return baseScore * performanceFactor * conditionFactor;
    }

    function calculateTeamScore(team) {
        let score = 0;
        for (let position in team.formation) {
            for (let playerId in team.formation[position]) {
                const player = team.caps.find(cap => cap.id === team.formation[position][playerId].capId);
                if (player) {
                    const playerImportance = positionsImportance[team.formation[position][playerId].type];
                    score += calculatePerformanceAdjustedScore(player, playerImportance);
                }
            }
        }
        return score / Object.keys(team.formation).length;
    }

    const team1Score = calculateTeamScore(team1);
    const team2Score = calculateTeamScore(team2);

    function simulateGameEvents(team1, team2) {
        const events = [];
        const totalEvents = Math.floor(Math.random() * 5) + 5; // Between 5 and 10 events
        for (let i = 0; i < totalEvents; i++) {
            const team1EventProbability = team1Score / (team1Score + team2Score);
            const team1Event = Math.random() < team1EventProbability;
            const scoringTeam = team1Event ? team1 : team2;
            const opposingTeam = team1Event ? team2 : team1;
            const scorer = scoringTeam.caps[Math.floor(Math.random() * scoringTeam.caps.length)];
            const minute = Math.floor(Math.random() * 30) + 1; // Random minute between 1 and 30
            events.push({
                scoringTeam: scoringTeam.name,
                scorer: scorer.name,
                scorerId: scorer.id,
                minute: minute
            });
        }
        return events;
    }

    const gameEvents = simulateGameEvents(team1, team2);

    function calculateMatchStats(events) {
        const stats = {
            team1: { name: team1.name, goals: 0, possession: 0, scorers: [] },
            team2: { name: team2.name, goals: 0, possession: 0, scorers: [] }
        };
        const scorerMap = {
            team1: {},
            team2: {}
        };

        events.forEach(event => {
            const teamKey = event.scoringTeam === team1.name ? 'team1' : 'team2';
            const opposingTeamKey = teamKey === 'team1' ? 'team2' : 'team1';

            stats[teamKey].goals++;

            if (!scorerMap[teamKey][event.scorerId]) {
                scorerMap[teamKey][event.scorerId] = { goals: 0, minutes: [], capId: event.scorerId, name: event.scorer };
            }
            scorerMap[teamKey][event.scorerId].goals++;
            scorerMap[teamKey][event.scorerId].minutes.push(event.minute);
        });

        for (const teamKey of ['team1', 'team2']) {
            stats[teamKey].scorers = Object.values(scorerMap[teamKey]);
        }

        const team1Possession = Math.round((team1Score / (team1Score + team2Score)) * 100);
        const team2Possession = 100 - team1Possession;
        stats.team1.possession = team1Possession;
        stats.team2.possession = team2Possession;

        return stats;
    }

    const matchStats = calculateMatchStats(gameEvents);

    function reduceDurabilityAndCondition(team) {
        // Iterar sobre las posiciones en la formación del equipo
        for (let position in team.formation) {
            for (let playerId in team.formation[position]) {
                const capId = team.formation[position][playerId].capId;
                const cap = team.caps.find(cap => cap.id === capId);

                if (cap) {
                    const involvement = Math.random();
                    const conditionReduction = Math.min(20, Math.round(involvement * 20));
                    const durabilityReduction = Math.min(10, Math.round(involvement * 10));
                    cap.condition = Math.max(0, cap.condition - conditionReduction);
                    cap.durability = Math.max(0, cap.durability - durabilityReduction);
                }
            }
        }
    }

    reduceDurabilityAndCondition(team1);
    reduceDurabilityAndCondition(team2);

    return matchStats;
}

export { simulateMatch };
