import { useParams } from "react-router-dom";
import GameCard from '../GameCard/GameCard.jsx'
import axios from "axios";
import React from "react";
import "./GameDetails.css";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import GameDetailPlay from "./GameDetailPlay"

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
        if (user.email === game.email) {
            axios.delete(`${baseURL}/${gameId}`).then((deletedGame) => {
                console.log(deletedGame)
            })
        } else (
            alert("You are not the owner of this game")
        )
    }

    async function editGame() {
        axios.put(`${baseURL}/${gameId}/edit`, game).then((editGame) => {
            console.log(editGame)

        })
    }
    // let game = games.find((gam) => gam.title === gameName);

    function editForm() {
        console.log({ user })
        console.log({ game })
        if (user.email === game.email) {
            setEdit(true)

        } else (
            alert("You are not the owner of this game")
        )

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

                        <div className="game-detail-main">
                            < h1 className="det-title"> {game.title}</h1 >

                            <hr className="det-line" />
                            <div className="det-right">
                                <img className="det-img" src={game.img} alt="" />
                                <div className="det-info">
                                    < h1 className="det-price"> ${game.price}</h1 >
                                    < p className="det-genre"> <b>Genre: </b>{game.genre}</p >
                                    < p className="det-desc"> <b>Description:</b> {game.description}</p >
                                    <GameDetailPlay />
                                </div>


                            </div>
                            <button className="det-but" onClick={removeGame}>Delete</button>
                            <button className="det-but" onClick={editForm}>Edit Game Info</button>
                        </div>
                        :
                        <></>
                    }
                </>
            }
        </div >
    );
}


