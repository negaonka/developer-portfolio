import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [menus] = useState([
    {
      name: 'about me',
    },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume'},
  ]);

  const [currentMenu, setCurrentMenu] = useState(menus[0]);

  return (
    <Header 
    menus={menus}
    setCurrentMenu={setCurrentMenu}
    currentMenu={currentMenu}/>
  );
}

export default App;
