import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { getUser } from "../utilities/users-service";
import './AddGameForm.css'
import { Component } from "react"
import { addGame } from '../utilities/games-api'
import { useHistory } from "react-router-dom"
const axios = require('axios').default;


export default class AddGameForm extends Component {

    state = {
        email: '',
        title: '',
        genre: '',
        description: '',
        link: '',
        img: '',
        price: '',
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
                <div className="Preview">
                    <h1 className="prev-head">
                        Listing Preview
                    </h1>
                    <h1 className="add-preview">{this.state.title}</h1>
                    <p className="prev-genre">{this.state.genre} | <b>${this.state.price}</b></p>
                    <hr className="add-line" />
                    <div className="left-top">
                        <img className="add-img-prev" src={this.state.img} alt="" />

                    </div>

                </div>
                <div className="game-form">
                    <div className="game-form-headder">
                        <h1 className="add-game-head">Add Game</h1>
                    </div>
                    <div className="game-form-title">
                        <input className="add-input" placeholder="NAME" type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                    </div>
                    <div className="game-form-genre">
                        <input className="add-input" placeholder="GENRE" type="text" onChange={this.handleChange} value={this.state.genre} name='genre' />
                    </div>
                    <div className="game-form-desc">
                        <input className="add-input" placeholder="DESCRIPTION" type="text" onChange={this.handleChange} value={this.state.description} cols='30' rows='10' name='description' />

                    </div>
                    <div className="game-form-link">
                        <input className="add-input" placeholder="GAME LINK" type="text" onChange={this.handleChange} value={this.state.link} name='link' />
                    </div>
                    <div className="game-form-img">
                        <input className="add-input" placeholder="GAME IMG (300px x 300px)" type="text" onChange={this.handleChange} value={this.state.img} name='img' />
                    </div>
                    <div className="game-form-price">
                        <input className="add-input" placeholder="PRICE" type="number" onChange={this.handleChange} value={this.state.price} name='price' />
                    </div>
                    <div className="game-form-email">
                        <input className="add-input" placeholder="CONFIRM USER EMAIL" type="text" onChange={this.handleChange} value={this.state.email} name='email' />
                    </div>
                    <div className="game-form-foot">
                        <button className="add-game-but" onClick={this.onSubmit} type='submit'
                        >SUBMIT</button>
                    </div>
                </div>
            </form>








        )
    }
}