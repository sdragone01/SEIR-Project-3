import './MoreGrid.css'
import SearchBar from "../../components/SearchBar"
import GameList from "../../components/GameList"
import { useState, useEffect } from "react";
const APIKEY = '3498f188321247eb96dee04d1c8e0928'
const url = `https://api.rawg.io/api/games?&key=${APIKEY}`
export default function MoreGrid() {
    const [gamesArr, setGamesArr] = useState([])
    let gameResults = []





    const findGame = async (searchText) => {
        gameResults = await fetch(`https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`, {
            method: 'GET'
        })
            .then((res) => {
                return res
                    .json()
                    .then((resJson) => {
                        console.log(resJson.results);
                        return resJson.results;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
        setGamesArr(gameResults);
    }
    return (
        <div className="more-grid">
            <div className='SearchBar'>
                <SearchBar findGame={findGame} />
                <GameList gamesArr={gamesArr} />

            </div>
        </div>
    )
}