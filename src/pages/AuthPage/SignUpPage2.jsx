import React, { useState } from 'react'
import Popup from '../../components/Popup'
import SignUpForm from '../../components/SignUpForm'
import { getUser } from "../../utilities/users-service";


function SignUpPage2() {
    const [user, setUser] = useState(getUser())
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)


    }
    return (
        <div>
            <input type="button" value="Signup"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <SignUpForm setUser={setUser} />
                </>
            }
                handleClose={togglePopup}
            />}

        </div>
    )
}

export default SignUpPage2