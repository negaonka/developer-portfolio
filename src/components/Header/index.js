import React from 'react'
import Nav from '../Nav';

function Header(props){
    const {
        menus = [],
        setCurrentMenu,
        currentMenu
      } = props;
    return(
    <>
    <header className="flex-row px-1 py-2">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="name"> Neha Gaonkar</span>
        </a>
      </h2>
    <Nav   
        menus={menus}
        setCurrentMenu={setCurrentMenu}
        currentMenu={currentMenu}/>
    </header>
    </>
    )
}

export default Header;