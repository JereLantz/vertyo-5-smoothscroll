import contactImg from "../assets/contactImg.png"
import { useRef } from "react"

export default function Contact(){
    const contactRef = useRef()

    return (
        <div ref={contactRef}>
        <h1>Contact</h1>
        <img src={contactImg} />
        </div>
    )
}
