export default function NavBar({onHomeClick, onAboutClick, onContactClick}){
    return(
        <nav>
        <button onClick={onHomeClick}>Go to home</button>
        <button onClick={onAboutClick}>Go to about</button>
        <button onClick={onContactClick}>Go to contact</button>
        </nav>
    )
}
