import './AddGameForm.css'
import { Component } from "react"

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
        } catch{
            this.setState({error: 'Adding Game Failed - Try Again'})
        }
    }

    render(){
    return (
        <>
        <h1 className='AddGame'>Add Game</h1>

            <form className='GameInfo'>
                <input type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                <input type="text" onChange={this.handleChange} value={this.state.genre} name='genre' />
                <input type="text" onChange={this.handleChange } value={this.state.description} name='description' />
                <input type="text" onChange={this.handleChange} value={this.state.link} name='link' />
                <input type="text" onChange={this.handleChange} value={this.state.img} name='img' />
                <input type="number" onChange={this.handleChange} value={this.state.price} name='price' />
                <button onClick={this.handleSubmit} type='submit'></button>
            </form>

        </>
    )
    }
}