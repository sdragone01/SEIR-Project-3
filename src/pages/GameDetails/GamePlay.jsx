import './GamePlay.css'
import GameCard from '../GameCard/GameCard.jsx'
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const baseURL = '/api/games'

export default function GamePlay() {

    const [game, setGame] = React.useState(null);
    let { gameId } = useParams();
    React.useEffect(() => {
        axios.get(`${baseURL}/${gameId}`).then((foundGame) => {

            setGame(foundGame.data.link)

        });
    }, []);
    console.log(game)

    return (
        <div className="playgame">

            <iframe scrolling='no' className='GamePlay' src={game}></iframe>

        </div >
    )
}