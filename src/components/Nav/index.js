import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function Nav(props){

    const {
        menus = [],
        setCurrentMenu,
        currentMenu
      } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentMenu.name);
      }, [currentMenu]);

 return (

      <nav>
        <ul className="flex-row">
        {menus.map((menu) => (
            <li
              className={`mx-2 ${
                currentMenu.name === menu.name && 'navActive'
                }`}
              key={menu.name}
            >
              <span
                onClick={() => {
                  setCurrentMenu(menu);
                }}
              >
                {capitalizeFirstLetter(menu.name)}
              </span>
            </li> 
            ))}
        </ul>
      </nav>
 )
}

export default Nav;