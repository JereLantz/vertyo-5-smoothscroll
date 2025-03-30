import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { createPortal } from "react-dom"

export default function ThemeToggler(){
    const {currentTheme, switchTheme}= useContext(ThemeContext)
    return(
        <>
        {createPortal(
            <button onClick={switchTheme} className="m-2 fixed left-11/12 bg-cyan-300 rounded-2xl py-2 px-4 hover:bg-cyan-200">
            Toggle theme {currentTheme}
            </button>
            ,
            document.getElementById("theme-toggle"))}
        </>
    )
}
