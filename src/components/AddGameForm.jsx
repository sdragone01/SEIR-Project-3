import './AddGameForm.css'
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
        <h1 className='AddGame'>Add Game</h1>

            <form className='GameInfo'>
                <input type="text" onChange={handleChange} value={''} name='title' />
                <input type="text" onChange={handleChange} value={''} name='genre' />
                <input type="text" onChange={handleChange } value={''} name='description' />
                <input type="text" onChange={handleChange} value={''} name='link' />
                <input type="text" onChange={handleChange} value={''} name='img' />
                <button onClick={handleSubmit} type='submit'></button>
            </form>

        </>
    )
}