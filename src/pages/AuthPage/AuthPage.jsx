
import SignUpForm from "../../components/SignUpForm"
import LoginForm from "../../components/LogInForm"

export default function AuthPage({ setUser }) {
    return (
        <main>

            <LoginForm setUser={setUser} />
            <SignUpForm setUser={setUser} />

        </main>
    )
}

