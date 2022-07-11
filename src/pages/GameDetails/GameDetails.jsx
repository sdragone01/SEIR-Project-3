import { useParams } from "react-router-dom";
import GameCard from '../GameCard/GameCard.jsx'
import axios from "axios";
import React from "react";
import "./GameDetails.css";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";

const baseURL = '/api/games'

export default function GameDetailPage() {
    const [user, setUser] = useState(getUser())
    const [game, setGame] = React.useState(null);
    const [edit, setEdit] = React.useState(null);
    let { gameId } = useParams();
    React.useEffect(() => {
        axios.get(`${baseURL}/${gameId}`).then((foundGame) => {

            setGame(foundGame.data)
        });
    }, []);

    async function removeGame() {
        axios.delete(`${baseURL}/${gameId}`).then((deletedGame) => {
            console.log(deletedGame)
        })
    }

    async function editGame() {
        axios.put(`${baseURL}/${gameId}/edit`, game).then((editGame) => {
            console.log(editGame)
        })
    }
    // let game = games.find((gam) => gam.title === gameName);

    function editForm() {
        console.log({ user })
        setEdit(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        editGame()

    }

    function handleChange(e) {
        setGame({ ...game, [e.target.name]: e.target.value });
    }


    return (
        <div>
            {edit ?
                <>
                    <h1>Hello Edit</h1>
                    <form className='GameInfo' onSubmit={handleSubmit}>
                        Title
                        <input type="text" placeholder={game.title} value={game.title} name='title' onChange={handleChange} />
                        Genre
                        <input type="text" placeholder={game.genre} value={game.genre} name='genre' onChange={handleChange} />
                        Description
                        <input type="text" placeholder={game.description} value={game.description} name='description' onChange={handleChange} />
                        Link
                        <input type="text" placeholder={game.link} value={game.link} name='link' onChange={handleChange} />
                        Image
                        <input type="text" placeholder={game.image} value={game.image} name='image' onChange={handleChange} />
                        Price
                        <input type="number" placeholder={game.price} value={game.price}
                            name='price' onChange={handleChange} />

                        <button type='submit'>SUBMIT</button>
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


