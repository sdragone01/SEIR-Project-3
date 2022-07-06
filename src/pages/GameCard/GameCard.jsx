import { games } from "../../seed"
import { Link } from "react-router-dom";


export default function GameCard() {
    return (
        <div className="GameGrid">
            {games.map((game) => {
                return (
                    <Link to={`/games/${game.title}`}>

                        <div className="gameCard" key={game.title}>
                            <div className="gameTag">
                                <h2 id="title">{game.title}</h2>
                                <p>Genre: {game.genre}</p>
                            </div>

                        </div>

                    </Link>
                )
            })}
        </div>
    )
}