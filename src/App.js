import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

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
      {currentMenu.name === "contact" && <Contact/>}
    </main>
  </>
  );
}

export default App;
