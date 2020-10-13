import React from 'react';
import './App.css';
import Contenu from './Composants/Contenu/Contenu'
import ThemeContextProvider from './Context/ThemeContext'
import BtnToggle from './Composants/BtnToggle/BtnToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Contenu/>
        <BtnToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
