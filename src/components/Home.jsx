import homeImage from "../assets/homeImg.png"

export default function Home({ref}){
    return(
        <div ref={ref}>
        <h1 className="m-2 uppercase text-3xl">Home</h1>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <img src={homeImage} />
        </div>
    )
}
