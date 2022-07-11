import React, { useState } from 'react'
import Popup from './Popup'
import PlayGameWindow from './PlayGameWindow'

import './PlayGame.css'



function PlayGame() {

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
                    <PlayGameWindow />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default PlayGame