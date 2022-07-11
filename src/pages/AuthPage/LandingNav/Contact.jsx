import React, { useState } from 'react'
import Popup from '../../../components/Popup'
import './Contact.css'
import ContactGrid from './ContactGrid'



function Contact() {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className='contact-butt' type="button" value="Contact"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <ContactGrid />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default Contact