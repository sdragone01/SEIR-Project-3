import React, { useState } from 'react'
import Popup from '../../../components/Popup'
import './Help.css'
import HelpGrid from './HelpGrid'



function Help() {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='help-butt' type="button" value="Help"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <HelpGrid />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default Help