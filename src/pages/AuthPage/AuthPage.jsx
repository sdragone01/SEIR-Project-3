import './AuthPage.css'
import SignUpButt from './SignUpPage'
import LogInButt from './LogInPage'
import Logo from './logo.svg'
import Tag from './titlebar.svg'




export default function AuthPage({ setUser }) {
    return (
        <main className="landingpage">

            <div className='headder'>
                <img className="logo" src={Logo} width="200px" />
                <div className='nav'>
                    <h1>Home</h1>
                    <h1>About us</h1>
                    <h1>Contact</h1>
                </div>
            </div>

            <div className='buttons'>
                <div className="tag">
                    <img src={Tag} width="750px" />
                </div>
                <div className='signUpButt'>
                    <SignUpButt setUser={setUser} />
                </div>
                <div className='logInButt'>
                    <LogInButt setUser={setUser} />
                </div>
            </div>

        </main>
    )
}
