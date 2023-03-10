import * as React from "react";
import React, { useState } from 'react';
import './header.css';

function Header() {
  const [activePage, setActivePage] = useState('Compte');

  return (
    <div className="header" style={{ backgroundColor: '#567153' }}>
      <div
        className={`header-page ${activePage === 'Compte' && 'active'}`}
        onClick={() => setActivePage('Compte')}
      >
        <span className="header-page-text">
          {activePage === 'Compte' ? (
            <span className="header-page-active-text">Compte</span>
          ) : (
            'Compte'
          )}
        </span>
      </div>
      <div
        className={`header-page ${activePage === 'Boutique' && 'active'}`}
        onClick={() => setActivePage('Boutique')}
      >
        <span className="header-page-text">
          {activePage === 'Boutique' ? (
            <span className="header-page-active-text">Boutique</span>
          ) : (
            'Boutique'
          )}
        </span>
      </div>
      <div
        className={`header-page ${activePage === 'Ma liste' && 'active'}`}
        onClick={() => setActivePage('Ma liste')}
      >
        <span className="header-page-text">
          {activePage === 'Ma liste' ? (
            <span className="header-page-active-text">Ma liste</span>
          ) : (
            'Ma liste'
          )}
        </span>
      </div>
      <div
        className={`header-page ${activePage === 'Amis' && 'active'}`}
        onClick={() => setActivePage('Amis')}
      >
        <span className="header-page-text">
          {activePage === 'Amis' ? (
            <span className="header-page-active-text">Amis</span>
          ) : (
            'Amis'
          )}
        </span>
      </div>
      {activePage && <div className="active-page-bar" />}
    </div>
  );
}

export default Header;
