import { createPortal } from "react-dom"

export default function ToTopBtn({onClick}){
    return(
        <>
        {createPortal(
        <button onClick={onClick} className="fixed bg-blue-300 rounded-b-3xl py-2 px-10 left-1/2">Back to top</button>,
            document.getElementById("portal-root")
        )}
        </>
    )
}
