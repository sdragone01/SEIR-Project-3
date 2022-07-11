import axios from "axios";
import React from "react";
import { Link } from "react-router-dom"
import './GameCard.css'
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import userEvent from "@testing-library/user-event";

const baseURL = 'api/games';

export default function UserGameCard() {
    const [post, setPost] = React.useState(null);
    const [user, setUser] = useState(getUser())

    React.useEffect(() => {
        axios.get(baseURL).then((post) => {
            setPost(post)

        });
    }, []);

    if (!post) return null;

    const filtered = post.data.filter(email => {
        return email.email === user.email

    })
    console.log(filtered)
    console.log(user.email)

    if (!post) return null;

    return (
        <div className="GameGrid">
            {filtered.map((game) => {

                return (
                    <Link className="game-link" to={`/games/${game._id}`} key={game._id}>

                        <div className="game-card-grid">
                            <div className="game-card-container">
                                <h1 id="game-title" className="game-title">{game.title}</h1>
                                <img id="game-img" className="game-img" src={game.img} alt=""></img>

                            </div>


                        </div>

                    </Link >
                )
            })}
        </div >
    )
}