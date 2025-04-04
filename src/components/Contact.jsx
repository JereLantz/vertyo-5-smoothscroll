import contactImg from "../assets/contactImg.png"

export default function Contact({ref}){
    return (
        <div ref={ref}>
        <h1 className="text-3xl uppercase m-2">Contact</h1>
        <img src={contactImg} />
        </div>
    )
}
