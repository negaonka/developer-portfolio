import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [menu] = useState([
    {
      name: 'about me',
    },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume'},
  ]);

  const [currentMenu, setCurrentMenu] = useState(menu[0]);

  return (
    <Header 
    menus={menu}
    setCurrentMenu={setCurrentMenu}
    currentMenu={currentMenu}/>
  );
}

export default App;
