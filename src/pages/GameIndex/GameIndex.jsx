import GameCard from "../GameCard/GameCard"
import './GameIndex.css'

export default function GameIndexPage() {

    return (
        <div className="game-index">
            <div className="GameIndex">
                <h1 className="games-from-users">
                    Games On Marketplace
                </h1>
                <hr className="index-line" />
                <GameCard />
                <GameCard />
            </div>
            <div className="api-search">

            </div>
        </div>
    )
}