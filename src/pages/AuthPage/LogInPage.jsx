import './AuthPage.css'
import LoginForm from "../../components/LogInForm"
import React, { Component } from 'react';

class LogInButt extends Component {
    state = { showForm: false }

    showLogInForm = () => {
        return (
            <div>

                <LoginForm />

            </div>
        );
    }

    render() {
        return (
            <div className='logIn'>
                <button onClick={() => this.setState({ showForm: true })}>Login</button>
                {this.state.showForm ? this.showLogInForm() : null}
            </div>
        );
    }

}
export default LogInButt