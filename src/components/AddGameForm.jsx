import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { getUser } from "../utilities/users-service";
import './AddGameForm.css'
import { Component } from "react"
import { addGame } from '../utilities/games-api'
const axios = require('axios').default;


export default class AddGameForm extends Component {

    state = {
        email: '',
        title: '',
        genre: '',
        description: '',
        link: '',
        img: '',
        price: 0,
        error: '',

    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }




    onSubmit = (e) => {

        e.preventDefault()
        const { email, title, genre, description, link, img, price, error } = this.state

        axios.post('api/games', { email, title, genre, description, link, img, price, error })
            .then((result) => {
                console.log(result)
            })
    }

    render() {
        return (

            <form className="game-form-container">
                <div className="Preview"></div>
                <div className="game-form">
                    <div className="game-form-headder"></div>
                    <div className="game-form-title">
                        <input type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                    </div>
                    <div className="game-form-genre">
                        <input type="text" onChange={this.handleChange} value={this.state.genre} name='genre' />
                    </div>
                    <div className="game-form-desc">
                        <input type="text" onChange={this.handleChange} value={this.state.description} name='description' />
                    </div>
                    <div className="game-form-link">
                        <input type="text" onChange={this.handleChange} value={this.state.link} name='link' />
                    </div>
                    <div className="game-form-img">
                        <input type="text" onChange={this.handleChange} value={this.state.img} name='img' />
                    </div>
                    <div className="game-form-price">
                        <input type="number" onChange={this.handleChange} value={this.state.price} name='price' />
                    </div>
                    <div className="game-form-email">
                        <input type="text" onChange={this.handleChange} value={this.state.email} name='email' />
                    </div>
                    <div className="game-form-foot">
                        <button onClick={this.onSubmit} type='submit'
                        >SUBMIT</button>
                    </div>
                </div>
            </form>








        )
    }
}