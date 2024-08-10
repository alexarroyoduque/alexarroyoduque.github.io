let formation = {
  id:'4-3-3',
  goalkeepers: {
    goalkeeper: {
      type: 'goalkeeper',
      capId: ''
    },
  },
  defenders: {
    defender1: {
      type: 'defender central',
      capId: ''
    },
    defender2: {
      type: 'defender central',
      capId: ''
    },
    defender3: {
      type: 'lateral left',
      capId: ''
    },
    defender4: {
      type: 'lateral right',
      capId: ''
    }
  },
  midfielders: {
    midfielder1: {
      type: 'midfielder defensive',
      capId: ''
    },
    midfielder2: {
      type: 'midfielder offensive',
      capId: ''
    },
    midfielder3: {
      type: 'midfielder offensive',
      capId: ''
    }
  },
  attackers: {
    attacker1: {
      type: 'winger',
      capId: ''
    },
    attacker2: {
      type: 'winger',
      capId: ''
    },
    attacker3: {
      type: 'forward',
      capId: ''
    }
  },
};

// Mapeo de posiciones para 4-3-3
let positionMap = {
  goalkeeper: ['goalkeepers.goalkeeper'],
  defender: ['defenders.defender1', 'defenders.defender2', 'defenders.defender3', 'defenders.defender4'],
  'midfielder defensive': ['midfielders.midfielder1'],
  'midfielder offensive': ['midfielders.midfielder2', 'midfielders.midfielder3'],
  winger: ['attackers.attacker1', 'attackers.attacker2'],
  forward: ['attackers.attacker3']
};

// Contador de posiciones para 4-3-3
let positionCounter = {
  goalkeeper: 0,
  defender: 0,
  'midfielder defensive': 0,
  'midfielder offensive': 0,
  winger: 0,
  forward: 0
};

export {
  formation,
  positionMap,
  positionCounter
}