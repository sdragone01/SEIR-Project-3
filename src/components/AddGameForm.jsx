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
        const { email, title, genre, description, link, img, price, error} = this.state

        axios.post('api/games', { email, title, genre, description, link, img, price, error})
            .then((result) => {
                console.log(result)
            })
    }

    render() {
        return (
            <>
                <h1 className='AddGame'>Add Game</h1>

                <form className='GameInfo'>
                    Title
                    <input type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                    Genre
                    <input type="text" onChange={this.handleChange} value={this.state.genre} name='genre' />
                    Description
                    <input type="text" onChange={this.handleChange} value={this.state.description} name='description' />
                    Link
                    <input type="text" onChange={this.handleChange} value={this.state.link} name='link' />
                    Image
                    <input type="text" onChange={this.handleChange} value={this.state.img} name='img' />
                    Price
                    <input type="number" onChange={this.handleChange} value={this.state.price} name='price' />
                    Confirm Email
                    <input type="text" onChange={this.handleChange} value={this.state.email} name='email' />
                    <button onClick={this.onSubmit} type='submit'
                    >SUBMIT</button>
                </form>

            </>
        )
    }
}