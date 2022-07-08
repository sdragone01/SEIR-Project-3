import import './AddGameForm.css'
import { Component } from "react"
// import { addGame } from '../utilities/games-api'
const axios = require('axios').default;

export default class AddGameForm extends Component {

    state = {
        title: '',
        genre: '',
        description: '',
        link: '',
        img: '',
        price: 0,
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }


    onSubmit = (e) => {
        e.preventDefault()
        const { title, genre, description, link, img, price, error } = this.state

        axios.put('api/games/:gameId', { title, genre, description, link, img, price, error })
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
                    <button onClick={this.onSubmit} type='submit'
                    >SUBMIT</button>
                </form>

            </>
        )
    }
}