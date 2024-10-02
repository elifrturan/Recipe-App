import { createContext, useReducer } from "react";
import themeReducer from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider( {children }) {
    const [state, distpatch] = useReducer(themeReducer, {
        color: "warning",
        mode: "dark"
    })

    const changeColor = (value) => {
        distpatch({type: "CHANGE_COLOR", payload: value})
    }

    const changeMode = (value) => {
        distpatch({type: "CHANGE_MODE", payload: value})
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}