import GameCard from "../GameCard/GameCard"
import './GameIndex.css'
import MoreFromApi from './MoreFromApi'
import ApiPreview from './ApiPreview'
import SeedCard from '../GameCard/SeedCard'

export default function GameIndexPage() {

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
                <SeedCard />


                <div className="more-from-but">< MoreFromApi /></div>
            </div>
        </div>
    )
}