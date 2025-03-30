export default function NavBar({onHomeClick, onAboutClick, onContactClick}){
    let btnStyles = "bg-emerald-500 rounded-md m-2 p-2"
    return(
        <nav>
        <button onClick={onHomeClick} className={btnStyles}>Go to home</button>
        <button onClick={onAboutClick} className={btnStyles}>Go to about</button>
        <button onClick={onContactClick} className={btnStyles}>Go to contact</button>
        </nav>
    )
}
