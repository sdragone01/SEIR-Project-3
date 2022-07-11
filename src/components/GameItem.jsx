import './GameItem.css'


export default function GameItem({ name, img, platforms, release, genres }) {
    return (
        <div className="MainContainer">
            < img className="api-img" src={img} alt="" />
            <h1>{name}</h1>

        </div>
    )
}