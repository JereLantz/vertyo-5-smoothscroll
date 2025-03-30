import { createContext, useState } from "react"
export const ThemeContext = createContext({
    currentTheme:"",
    switchTheme: ()=>{}
})

export default function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light")

    function handleThemeSwitch(){
        setTheme((p)=> p=="light"?"dark":"light")
    }

    const ctxValue = {
        currentTheme:theme,
        switchTheme:handleThemeSwitch
    }

    return(
    <ThemeContext.Provider value={ctxValue}>
    {children}
    </ThemeContext.Provider>
    )
}
