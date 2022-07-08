import { useParams } from "react-router-dom";
import GameCard from '../GameCard/GameCard.jsx'
import axios from "axios";
import React from "react";
import "./GameDetails.css";

const baseURL = '/api/games'

export default function GameDetailPage() {
    const [game, setGame] = React.useState(null);
    let { gameId } = useParams();
    React.useEffect(() => {
        axios.get(`${baseURL}/${gameId}`).then((foundGame) => {

            setGame(foundGame.data)
        });
    }, []);


    // let game = games.find((gam) => gam.title === gameName);

    return (
        <div>
            {game ?

                <>
                    < h1 > {game.title}</h1 >

                </>
                :
                <h1>game not found</h1>

            }
        </div>
    );
}
