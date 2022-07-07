import axios from "axios";
import React from "react";

const baseURL = 'api/games';

export default function GameCard() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response)

        });
    }, []);

    if (!post) return null;
    console.log(post.title)

    return (
        <div>
            <h1>GAME</h1>
        </div>
    )
}