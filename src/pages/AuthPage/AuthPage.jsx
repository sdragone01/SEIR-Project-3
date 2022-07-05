import './AuthPage.css'
import SignUpButt from './SignUpPage'
import LogInButt from './LogInPage'



export default function AuthPage({ setUser }) {
    return (
        <main id="landingpage">
            <div id="buttons" >
                <SignUpButt setUser={setUser} />
                <LogInButt setUser={setUser} />
            </div>
        </main>
    )
}
