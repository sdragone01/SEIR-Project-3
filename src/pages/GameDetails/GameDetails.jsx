import { useParams } from "react-router-dom";
import GameCard from '../GameCard/GameCard.jsx'
import axios from "axios";
import React from "react";
import "./GameDetails.css";

const baseURL = '/api/games'

export default function GameDetailPage() {
    const [game, setGame] = React.useState(null);
    const [edit, setEdit] = React.useState(null);
    let { gameId } = useParams();
    React.useEffect(() => {
        axios.get(`${baseURL}/${gameId}`).then((foundGame) => {

            setGame(foundGame.data)
        });
    }, []);

    async function removeGame () {
        axios.delete(`${baseURL}/${gameId}`).then((deletedGame) => {
            console.log(deletedGame)
        })
    }

    // async function editGame() {
    //     axios.delete(`${baseURL}/${gameId}`).then((editGame) => {
    //         console.log(editGame)
    //     })
    // }
    // let game = games.find((gam) => gam.title === gameName);

    function editForm () {
        setEdit(true)
    }

    return (
        <div>
            {edit ?
            <>
            <h1>Hello Edit</h1>
            <form className='GameInfo'>
                    Title
                    <input type="text" value={game.title}/>
                    Genre
                    <input type="text" value={game.genre}/>
                    Description
                    <input type="text"  value={game.description}/>
                    Link
                    <input type="text"  value={game.link}/>
                    Image
                    <input type="text"  value={game.image}/>
                    Price
                    <input type="number"  value={game.price}/>
                    <button type='submit'
                    >SUBMIT</button>
                </form>
                </>
            :
                <>
                    {game ?

                        <>
                            < h1 > {game.title}</h1 >
                            < h1 > {game.image}</h1 >
                            < h1 > {game.link}</h1 >
                            <hr /> 
                            < h1 > {game.description}</h1 >
                            < h1 > {game.genre}</h1 >
                            < h1 > {game.price}</h1 >
                            
                            <button onClick={removeGame}>Delete</button>
                            <button onClick={editForm}>Edit Game Info</button>
                        </>
                        :
                        <h1>game not found</h1>
                    }
                </>
}
        </div>
    );
}


