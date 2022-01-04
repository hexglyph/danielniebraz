import { createContext, useEffect, useState } from "react";

const AppContext = createContext({})

export function AppProvider(props) {
    const [theme, setTheme] = useState('')


    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme')
        setTheme(themeSaved)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext
export const AppConsumer = AppContext.Consumer