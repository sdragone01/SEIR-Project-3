import './GameLibrary.css'
import UserGameCard from "../GameCard/UserGameCard"
import React from 'react';
import axios from 'axios';

export default function GameLibrary() {
    const [post, setPost] = React.useState(null);
    const baseURL = 'api/games'


    React.useEffect(() => {
        axios.get(baseURL).then((post) => {
            setPost(post)
            console.log(post)


        });
    }, []);
    return (
        <div className="library-container">

            <UserGameCard />
        </div>
    )
}