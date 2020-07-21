import React, {useContext} from 'react'
import './Contenu.css'
import {ThemeContext} from '../../Context/ThemeContext'
function Contenu() {

    const {theme} = useContext(ThemeContext)
    
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div>
                {theme}
            </div>
        </div>
    )
}

export default Contenu
