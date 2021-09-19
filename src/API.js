export const API_URL = 'http://ddragon.leagueoflegends.com/cdn/';

export function SEARCH_IN_VERSION() {
  return {
    url: API_URL + `11.18.1/data/pt_BR/champion.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function SEARCH_CHAMPION(version, champion) {
  return {
    url: API_URL + `${version}/data/pt_BR/champion/${champion}.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
