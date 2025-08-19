import { useContext } from "react"
import { useTheme, useThemeUpdate } from './ThemeProvider'

export default function ChildComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyle = {
        backgroundColor: darkTheme ? '#000' : '#fff',
        color: darkTheme ? '#fff' : '#000',
        padding: '2rem',
        margin: '2rem'
    }
    return <>
        <div style={themeStyle}>HI</div>
        <button onClick={toggleTheme}>ToggleTheme</button>
    </>
}