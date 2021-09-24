import React from 'react';

import useFetch from '../../Hooks/useFetch';
import { SEARCH_ITENS } from '../../API';

const ItemList = ({ version }) => {
  const { data, request } = useFetch();
  React.useEffect(() => {
    async function fetchItens() {
      const { url, options } = SEARCH_ITENS(version);
      request(url, options);
    }
    fetchItens();
  }, [version, request]);

  if (data) return <>{console.log(data)}</>;
  return null;
};

export default ItemList;
