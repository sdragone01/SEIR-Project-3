import React, { useState } from 'react'
import Popup from '../../components/Popup'
import './MoreFromApi.css'
import MoreGrid from './MoreGrid'



function MoreFromApi({ findGame }) {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='more-butt' type="button" value="Browse More"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <MoreGrid findGame={findGame} />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default MoreFromApi