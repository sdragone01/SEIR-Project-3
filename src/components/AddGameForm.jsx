
import { useState } from "react"

export default function AddGameForm() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form, [field]: value
        })
        if (!!errors[field])
            setErrors({ ...errors, [field]: null })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <>
            {/* <form onSubmit={ }>
                <input type="text" onChange={(e) => setField('title', e.target.value)} value={form.title} name='title' />
                <input type="text" onChange={ } value={genre} name='genre' />
                <input type="text" onChange={ } value={description} name='description' />
                <input type="text" onChange={ } value={link} name='link' />
                <input type="text" onChange={ } value={img} name='img' />
                <button type='submit'></button>
            </form> */}
        </>
    )
}