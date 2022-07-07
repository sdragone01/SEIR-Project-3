import './AddGameForm.css'
import { Component } from "react"
import { addGame } from '../utilities/games-api'
export default class AddGameForm extends Component {
    
    state = {
        title: '',
        genre: '',
        description: '',
        link: '',
        img: '',
        price: Number,
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error:''
        })
    }

    handleSubmit =  async (evt) => {
        evt.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error
            await addGame(formData)
        } catch{
            this.setState({error: 'Adding Game Failed - Try Again'})
        }
    }

    render(){
    return (
        <>
        <h1 className='AddGame'>Add Game</h1>

            <form className='GameInfo'>
                Title
                <input type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                Genre
                <input type="text" onChange={this.handleChange} value={this.state.genre} name='genre' />
                Description
                <input type="text" onChange={this.handleChange } value={this.state.description} name='description' />
                Link
                <input type="text" onChange={this.handleChange} value={this.state.link} name='link' />
                Image
                <input type="text" onChange={this.handleChange} value={this.state.img} name='img' />
                Price
                <input type="number" onChange={this.handleChange} value={this.state.price} name='price' />
                <button onClick={this.handleSubmit} type='submit'>SUBMIT</button>
            </form>

        </>
    )
    }
}