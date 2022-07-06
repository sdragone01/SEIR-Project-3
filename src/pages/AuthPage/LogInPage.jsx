import React, { useState } from 'react'
import Popup from '../../components/Popup'
import LogInForm from '../../components/LogInForm'
import { getUser } from "../../utilities/users-service";


function LogInPage() {
    const [user, setUser] = useState(getUser())
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input type="button" value="Login"
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