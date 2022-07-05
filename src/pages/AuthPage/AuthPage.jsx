import './AuthPage.css'
import SignUpButt from './SignUpPage'
import LogInButt from './LogInPage'



export default function AuthPage({ setUser }) {
    return (
        <main>

            <SignUpButt setUser={setUser} />
            <LogInButt setUser={setUser} />

        </main>
    )
}
