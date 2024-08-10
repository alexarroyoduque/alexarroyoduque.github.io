import {lang as en} from '../locales/en.js';
import {lang as es} from '../locales/es.js';

import { simulateMatch } from './match.js';
import {
  formation as formation_4_4_2,
  positionMap as positionMap_4_4_2,
  positionCounter as positionCounter_4_4_2,
} from './formation_4_4_2.js';

import {
  formation as formation_4_3_3,
  positionMap as positionMap_4_3_3,
  positionCounter as positionCounter_4_3_3,
} from './formation_4_3_3.js';

function filterByIds(arrayIds, collection) {
  return arrayIds.map(id => collection.find(item => item.id === id));
}

function findIndex(collection, element) {
  return collection.indexOf(element);
}

function calculatePerformance(ids, collection) {
  let caps = filterByIds(ids, collection);
  caps.forEach(cap => {
    if (cap.positionActive === 'bench' || cap.positionActive === 'reserve') {
      cap.performance = 100;
      cap.mediaReal = cap.media;
    } else if (cap.positionFavorite !== cap.positionActive) {
      cap.performance = 60;
      cap.mediaReal = Math.floor(cap.media*(cap.performance/100));
    } else {
      cap.performance = 100;
      cap.mediaReal = cap.media; 
    }
  });
}

function getSquadMedia(caps, ids) {
  // Filtrar los objetos según los IDs proporcionados
  let filteredObjects = caps.filter(obj => ids.includes(obj.id));

  // Calcular la suma de los valores de media
  let sumMedia = filteredObjects.reduce((acc, obj) => acc + obj.mediaReal, 0);

  // Calcular la media
  let mediaSquad = Math.floor(sumMedia / filteredObjects.length);

  return mediaSquad;
}

let formations = {
  '4-4-2': {
    formation: formation_4_4_2,
    positionMap: positionMap_4_4_2,
    positionCounter: positionCounter_4_4_2,
  },
  '4-3-3': {
    formation: formation_4_3_3,
    positionMap: positionMap_4_3_3,
    positionCounter: positionCounter_4_3_3,
  }
};

function getFormation(tactic){
  return formations[tactic];
}

function t(key) {
  let selectedLang = localStorage.tokenSoccerLang;
  let locales = {es, en};
  return locales[selectedLang][key]
}

export {
  filterByIds,
  findIndex,
  calculatePerformance,
  getSquadMedia,
  getFormation,
  simulateMatch,
  t
}