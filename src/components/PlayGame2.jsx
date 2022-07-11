import React, { useState } from 'react'
import Popup from './Popup'
import PlayGameWindow2 from './PlayGameWindow2'

import './PlayGame.css'



function PlayGame2() {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='play-now' type="button" value="Demo Game"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <PlayGameWindow2 />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default PlayGame2