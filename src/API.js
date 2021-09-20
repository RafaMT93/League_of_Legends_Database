export const CHAMPIONS_API_URL = 'http://ddragon.leagueoflegends.com/cdn/';

export function SEARCH_IN_VERSION(version) {
  return {
    url: CHAMPIONS_API_URL + `${version}/data/pt_BR/champion.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function SEARCH_CHAMPION(version, champion) {
  return {
    url: CHAMPIONS_API_URL + `${version}/data/pt_BR/champion/${champion}.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
