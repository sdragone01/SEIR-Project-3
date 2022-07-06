import './AuthPage.css'



import LogInButt from './LogInPage'
import Logo from './logo.svg'
import Tag from './titlebar.svg'

import { Routes, Route } from "react-router-dom";
import SignUpButt from './SignUpPage'
import SignUpPage2 from './SignUpPage2'



export default function AuthPage({ setUser }) {
    return (
        <main className="landingpage">

            <div className='headder'>
                <img className="logo" src={Logo} width="200px" />
                <div className='nav'>
                    <h1 className='navItem'>Home</h1>
                    <h1 className='navItem'>About us</h1>
                    <h1 className='navItem'>Contact</h1>
                </div>
            </div>

            <div className='buttons'>
                <div className="tag">
                    <img src={Tag} width="750px" />
                </div>
                <div className='signUpButt'>
                    <SignUpPage2 setUser={setUser} />

                </div>
                <div className='logInButt'>
                    <LogInButt setUser={setUser} />
                </div>
            </div>

        </main>
    )
}
