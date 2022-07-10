import { Component } from "react"
import { signUp } from "../utilities/users-service.js"

import './SignUpForm.css'
import thunder from './thunder.svg'


export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    refreshPage() {
        window.location.reload();
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { ...this.state }
            delete formData.error;
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            delete formData.confirm
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (

            <div className="container">
                <div className="Img">
                </div>

                <form className="Form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="Head">

                        <h1 className="headtext">Welcome to TG Games</h1>
                        <p className="sub-text">Register your account</p>
                    </div>

                    <div className="name">
                        <input className="form-input" placeholder="&#128100; | NAME" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>

                    <div className="email">
                        <input className="form-input" placeholder="  &#64; | E-MAIL" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>

                    <div className="pass">
                        <input className="form-input" placeholder="&#128274; | PASSWORD" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </div>

                    <div className="confirm">
                        <input className="form-input" placeholder="&#128274; | CONFIRM PASSWORD" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    </div>

                    <div className="button">
                        <button className="formButt" type="submit" disabled={disable}>SIGN UP</button>
                    </div>

                </form>

            </div>
        )
    }
}
