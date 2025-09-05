import {  createContext, useContext, useState } from 'react'

const ThemeValue = createContext();

export function useTheme() {
    return useContext(ThemeValue)
}


export default function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return <>
        <ThemeValue.Provider value={{darkTheme , toggleTheme}}>
            {children}
        </ThemeValue.Provider>
    </>
}