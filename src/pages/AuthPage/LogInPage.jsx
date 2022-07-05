import './AuthPage.css'
import LoginForm from "../../components/LogInForm"
import React, { Component } from 'react';


class LogInButt extends Component {
    state = { showForm: false }

    showLogInForm = () => {
        return (

            <LoginForm />

        );
    }

    render() {
        return (
            <div >
                <button className='logIn' onClick={() => this.setState({ showForm: true })}>Login</button>
                {this.state.showForm ? this.showLogInForm() : null}
            </div>
        );
    }

}
export default LogInButt