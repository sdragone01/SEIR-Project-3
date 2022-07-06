import { useState } from "react"
export default function AddGameForm() {
    const [addGame, setAddGame] = useState({})

    return (
        <>
            <form>
                <input type="text" value={title} name='title' />
                <input type="text" value={genre} name='genre' />
                <input type="text" value={description} name='description' />
                <input type="text" value={link} name='link' />
                <input type="text" value={img} name='img' />
            </form>
        </>
    )
}
