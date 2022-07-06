import './AuthPage.css'
import SignUpForm from "../../components/SignUpForm"
import React, { Component } from 'react';

class SignUpButt extends Component {
    state = { showForm: false }

    showSignupForm = () => {
        return (
            <div>
                <SignUpForm />
                <button onClick={() => this.setState({ showForm: false })}> Close</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button className='signUp' onClick={() => this.setState({ showForm: true })}>Signup</button>
                {this.state.showForm ? this.showSignupForm() : null}
            </div>
        );
    }
}
export default SignUpButt