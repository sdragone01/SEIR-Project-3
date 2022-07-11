import axios from "axios";
import React from "react";
import { Link } from "react-router-dom"
import './GameCard.css'

const baseURL = 'api/games';

export default function GameCard() {
    const [post, setPost] = React.useState(null);


    React.useEffect(() => {
        axios.get(baseURL).then((post) => {
            setPost(post)
            console.log(post)


        });
    }, []);

    if (!post) return null;

    return (
        <div className="GameGrid">
            {post.data.map((game) => {
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