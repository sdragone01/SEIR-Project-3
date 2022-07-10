import React, { useState } from 'react'
import Popup from '../../components/Popup'
import LogInForm from '../../components/LogInForm'
import "./LogInPage.css"



function LogInPage({ setUser }) {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input className="log-in-button" type="button" value="Login"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <LogInForm setUser={setUser} />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default LogInPage