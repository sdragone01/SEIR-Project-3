import './GameItem.css'


export default function GameItem({ name, img, platforms, release, genres }) {
    return (
        <>
            <div className="main-api-grid">
                <a href="">  < img className="api-img" id='api-img' src={img} alt="" /></a>
                <h3 id='api-title' className='api-title'>{name}</h3>
            </div>

        </>
    )
}