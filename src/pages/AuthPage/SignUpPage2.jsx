import React, { useState } from 'react'
import Popup from '../../components/Popup'
import SignUpForm from '../../components/SignUpForm'



function SignUpPage2({ setUser }) {

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