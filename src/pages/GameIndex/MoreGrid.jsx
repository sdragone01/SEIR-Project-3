import './MoreGrid.css'
import SearchBar from "../../components/SearchBar"
import GameList from "../../components/GameList"
import { useState, useEffect } from "react";

export default function MoreGrid({ findGame }) {

    return (
        <div className="more-grid">
            <div className='SearchBar'>
                <SearchBar findGame={findGame} />
                <GameList />

            </div>
        </div>
    )
}