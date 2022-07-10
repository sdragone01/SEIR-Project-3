import React, { useState } from 'react'
import Popup from '../../../components/Popup'
import './About.css'
import AboutGrid from './AboutGrid'



function About() {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='about-butt' type="button" value="About"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <AboutGrid />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default About