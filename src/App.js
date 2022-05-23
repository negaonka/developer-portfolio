import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

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
    <>
    <Header 
    menus={menus}
    setCurrentMenu={setCurrentMenu}
    currentMenu={currentMenu}/>
    <main>
      {currentMenu.name === "about me" && <About/>}
      {currentMenu.name === "portfolio" && <Portfolio/>}
    </main>
  </>
  );
}

export default App;
