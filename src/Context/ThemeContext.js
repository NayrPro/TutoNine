import React, {createContext, useState, useReducer} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic magni beatae natus quasi nulla, totam perspiciatis corrupti sint autem tenetur doloribus itaque quidem quis voluptatibus earum dolor quae expedita, laboriosam asperiores vel provident? Excepturi accusamus, inventore cum, nemo expedita consequatur, ad velit cumque sequi libero amet fugit. Quibusdam totam maiores suscipit excepturi sit esse non ut voluptates exercitationem, velit iure, repellendus ipsa. Et est, impedit obcaecati placeat dolores, quae pariatur eius reiciendis saepe accusamus id ducimus nesciunt quasi atque voluptates. Exercitationem sed ducimus animi, natus ullam eius at quod reprehenderit optio ad ab beatae eligendi debitis similique vel harum iure?"
    
    const [theme, setTheme] = useState(lorem)
    const lightMode = "Go Dark"
    const colorMode = "#e0ddd5"
    const [changeLight, dispatch] = useReducer(lightReducer, {lightMode, colorMode})
    return(
        <ThemeContext.Provider value={{theme, changeLight, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
    
    function lightReducer(state = {lightMode, colorMode}, action) {
        switch(action.type){
        case 'LIGHT':
            return {
                lightMode :"Go Light",
                colorMode: "#333"
            
            }
        case 'DARK':
            return {
                lightMode :"Go Dark",
                colorMode: "#e0ddd5"
            }
        default: return state;
         }
    }
}

export default ThemeContextProvider;

