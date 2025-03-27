import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"

import { useRef } from "react"

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
  return (
    <>
      <NavBar onHomeClick={handleScrollHome} onAboutClick={handleScrollAbout} onContactClick={handleScrollContact}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
    </>
  )
}

export default App
