import React, {useContext, useRef}  from 'react'
import {ThemeContext} from '../../Context/ThemeContext'
import './BtnToggle.css'
function BtnToggle() {

    const {changeLight, dispatch} = useContext(ThemeContext)

    const {lightMode, colorMode} = changeLight
    console.log(changeLight, lightMode, colorMode);
    
    const toggle = () => {
          if(lightMode === "Go Light"){ 
                    dispatch({type : 'DARK'})
                    document.body.setAttribute("style", "background-color: #e0ddd5 !important;")

                  } 
                    else{ 
                        dispatch({type : 'LIGHT'})
                        document.body.setAttribute("style", "background-color:  #333 !important;")

                    } 

     }

    return (
          <button 
             style={{backgroundColor: colorMode === "#333" ? "#f1f1f1" : "#333", color : colorMode}}
             onClick={toggle} 
           >
           {lightMode}
           </button>  
    )
}

export default BtnToggle