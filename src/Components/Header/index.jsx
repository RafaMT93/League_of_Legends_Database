import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperHeader, WrapperNav } from './styled';

const Header = () => {
  return (
    <WrapperHeader>
      <WrapperNav className="container">
        <Link to="/">Logo</Link>
        <Link to="/">Champions</Link>
        <Link to="/Item">Itens</Link>
        {/*         <Link>Spells</Link>
        <Link>Jungle Time</Link>
        <Link>Summoners</Link> */}
      </WrapperNav>
    </WrapperHeader>
  );
};

export default Header;
