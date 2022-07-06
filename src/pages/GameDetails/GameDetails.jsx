import { useParams } from "react-router-dom";
import "./GameDetails.css";
export default function GameDetailPage({ games }) {
    let { gameName } = useParams();
    let game = games.find((gam) => gam.title === gameName);
    return (
        <div className="info">
            <div className="textInfo">
                <h1>{game.title}</h1>
                <h3>Genre: {game.genre}</h3>




            </div>

        </div>
    );
}
