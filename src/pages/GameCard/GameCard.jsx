import { seedGames } from "../../seed"


export default function GameCard() {
    return (
        <div className="GameCard">
            {seedGames.map((game) => {
                return (
                    <>
                        <h1>{game.title}</h1>
                        <h1>{game.genre}</h1>
                        <h1>{game.description}</h1>
                        <h1>{game.link}</h1>
                        <h1>{game.img}</h1>

                    </>
                )
            })}
        </div>
    )
}