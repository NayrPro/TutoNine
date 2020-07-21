import React, {createContext, useState, useReducer} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    
    const [theme, setTheme] = useState(true)
    
    return(
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;

