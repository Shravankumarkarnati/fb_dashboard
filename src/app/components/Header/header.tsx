import React from 'react';
import './header.styles.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <header className="header" data-testid="Header">
    <h1 className="header-heading">Facebook Dashboard</h1>
  </header>
);

export default Header;
