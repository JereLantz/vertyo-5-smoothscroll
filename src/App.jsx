import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import ThemeContextProvider from "./contexts/ThemeContext"
import { useRef } from "react"
import ToTopBtn from "./components/ToTopBtn"
import ThemeToggler from "./components/ThemeToggler"

function App() {
    const homeRef = useRef()
    const aboutRef= useRef()
    const contactRef = useRef()

    function handleScrollHome(){
        homeRef.current.scrollIntoView({behavior:"smooth"})
    }

    function handleScrollAbout(){
        aboutRef.current.scrollIntoView({behavior:"smooth"})
    }

    function handleScrollContact(){
        contactRef.current.scrollIntoView({behavior:"smooth"})
    }

    function handleBackTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <>
      <ThemeContextProvider >
      <ToTopBtn onClick={handleBackTop}/>
      <NavBar onHomeClick={handleScrollHome} onAboutClick={handleScrollAbout} onContactClick={handleScrollContact}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
      <ThemeToggler />
      </ThemeContextProvider >
    </>
  )
}

export default App
