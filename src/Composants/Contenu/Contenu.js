import React, {useContext} from 'react'
import './Contenu.css'
import {ThemeContext} from '../../Context/ThemeContext'
function Contenu() {

    const {theme} = useContext(ThemeContext)
    const {changeLight, dispatch} = useContext(ThemeContext)
    const {colorMode} = changeLight
    return (
        <div className="lorem" style={{color : colorMode === "#333" ? "#f1f1f1" : "#333",
                                       backgroundColor: colorMode
        }}>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div>
                {theme}
            </div>
        </div>
    )
}

export default Contenu
