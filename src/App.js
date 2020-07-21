import React from 'react';
import './App.css';
import Contenu from './Composants/Contenu/Contenu'
import ThemeContextProvider from './Context/ThemeContext'
import BtnToggle from './Composants/BtnToggle/BtnToggle';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToggle/>
        <Contenu/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
