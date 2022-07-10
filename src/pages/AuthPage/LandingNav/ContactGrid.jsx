
import './ContactGrid.css'
import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { useState } from 'react'


export default function ContactGrid() {
    const [clicked, setClicked] = useState(null)
    const submitHandler = () => {
        setClicked(true)
    }

    return (
        <>
            {clicked ? (
                <>
                    <div className="contact-container">
                        <div className="About-Img">

                        </div>
                        <div className="contact-Content">
                            <div className="Head">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />



                            </div>
                            <div className="Body">
                                <br />
                                <br />
                                <h1 className='contact-submit-headder'>Thank You!</h1>
                                <p>Someone will contact you shortly!</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </div>
                            <div className="Foot">

                            </div>
                        </div>

                    </div >
                </>
            ) : (

                <div className="contact-container">
                    <div className="About-Img">

                    </div>
                    <div className="contact-Content">
                        <div className="Head">
                            <h1 className='contact-headder'>Contact Us</h1>
                            <p className="sub-head-contact">Submit a form and a team member will reach out as soon as possible</p>


                        </div>
                        <div className="contact-Body">
                            <label>Name</label>
                            <br />
                            <input className="contact-input" type="text"></input> <br />
                            <br />
                            <label>Email</label>
                            <br />
                            <input className="contact-input" type="text"></input> <br />
                            <br />
                            <label>Issue</label>
                            <br />
                            <select className='select' >
                                <option>Purchasing</option>
                                <option>Account</option>
                                <option>Login Issues</option>
                                <option>Recieving Payment</option>
                                <option>Other</option>
                            </select> <br />
                            <br></br>

                            <label>Please Describe Your Issue</label>
                            <br />
                            <textarea className="contact-input-big" cols='30' rows="10" />
                            <br />
                            <br />
                            <input type="checkbox" />
                            <label> I Agree to let "TG Games" use my personal information for their own personal gain ?</label><br />

                        </div>
                        <div className="contact-Foot">
                            <button className="contact-submit" onClick={submitHandler}>Submit</button>
                        </div>
                    </div>

                </div >
            )
            }
        </>
    )
}



