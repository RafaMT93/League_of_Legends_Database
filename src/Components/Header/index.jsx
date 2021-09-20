import React from 'react';
import { WrapperHeader, WrapperHeaderLink } from './styled';

const Header = () => {
  return (
    <WrapperHeader>
      <WrapperHeaderLink>Logo</WrapperHeaderLink>
      <WrapperHeaderLink>Champions</WrapperHeaderLink>
      <WrapperHeaderLink>Itens</WrapperHeaderLink>
      <WrapperHeaderLink>Spells</WrapperHeaderLink>
      <WrapperHeaderLink>Jungle Time</WrapperHeaderLink>
      <WrapperHeaderLink>Summoners</WrapperHeaderLink>
    </WrapperHeader>
  );
};

export default Header;
