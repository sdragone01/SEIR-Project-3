
import React from "react";
import { Link } from "react-router-dom"
import './SeedCard.css'
import { games } from '../../seed'


export default function SeedCard() {


    return (
        <div className="GameGrid">
            {games.map((game) => {

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