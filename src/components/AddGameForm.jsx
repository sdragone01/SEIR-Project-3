
import { useState } from "react"

export default function AddGameForm() {
    const [newGame, setNewGame] = useState({})
    
    function handleSubmit(event){
        event.preventDefault()
        setNewGame({})

    }

    const handleChange = (e) => {
        
    }
    return (
        <>


            <form>
                <input type="text" onChange={handleChange} value={title} name='title' />
                <input type="text" onChange={handleChange} value={genre} name='genre' />
                <input type="text" onChange={handleChange } value={description} name='description' />
                <input type="text" onChange={handleChange} value={link} name='link' />
                <input type="text" onChange={handleChange} value={img} name='img' />
                <button onClick={handleSubmit} type='submit'></button>
            </form>

        </>
    )
}