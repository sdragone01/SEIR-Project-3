import GameCard from "../GameCard/GameCard"
import './GameIndex.css'
import MoreFromApi from './MoreFromApi'
import ApiPreview from './ApiPreview'

export default function GameIndexPage({ findGame }) {

    return (
        <div className="game-index">
            <div className="GameIndex">
                <h1 className="games-from-users">
                    Games On Marketplace
                </h1>
                <hr className="index-line" />
                <GameCard />

            </div>
            <div className="api-search">
                <h1 className="games-from-api">
                    Upcoming Releases
                </h1>
                <hr className="index-line" />
                <GameCard />


                <div className="more-from-but">< MoreFromApi findGame={findGame} /></div>
            </div>
        </div>
    )
}