export default function GameItem({name, img,platforms, released, genres}) {
    return (
        <>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h6>{platforms}</h6>
        <h6>{genres}</h6>
        <h6>{released}</h6>
        </>
    )
}