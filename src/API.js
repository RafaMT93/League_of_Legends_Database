const CHAMPION_APP_URL = 'http://ddragon.leagueoflegends.com/cdn/';

export function SEARCH_IN_VERSION(version) {
  return {
    url: CHAMPION_APP_URL + `${version}/data/pt_BR/champion.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function SEARCH_CHAMPION(version, champion) {
  return {
    url: CHAMPION_APP_URL + `${version}/data/pt_BR/champion/${champion}.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function SEARCH_ITENS(version) {
  return {
    url: CHAMPION_APP_URL + `${version}/data/pt_BR/item.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
