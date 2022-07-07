import axios from "axios";
import React from "react";
import { Link } from "react-router-dom"

const baseURL = 'api/games';

export default function GameCard({ game }) {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((post) => {
            setPost(post)
            console.log(post.data.title)

        });
    }, []);

    if (!post) return null;

    return (
        <div className="GameGrid">
            {post.data.map((game) => {
                return (
                    <Link to={`/games/${game.title}`}>

                        <div className="gameCard" key={game.title}>
                            <div className="gameTag">
                                <h2 id="title">{game.title}</h2>

                            </div>

                        </div>

                    </Link>
                )
            })}
        </div>
    )
}