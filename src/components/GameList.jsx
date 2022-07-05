import GameItem from "./GameItem"

export default function GameList({gamesArr}) {
    return (
        <>
            {gamesArr.map((game, index) => (
                <GameItem
                name={game.name} 
                img={game.background_image}
                // platforms={game.platforms}
                // genres={game.genres}
                release={game.released}
                key={index}
                />
        ))}
        </>
    )
}