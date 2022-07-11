import React, { useState } from 'react'
import Popup from '../../components/Popup'
import GamePlay from './GamePlay'

import './GameDetailPlay.css'



function GameDetailPlay() {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='play-now' type="button" value="Play Now"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <GamePlay />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default GameDetailPlay