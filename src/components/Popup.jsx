import React from "react"
import './Popup.css'

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-submit" onClick={props.handleClose}>GO BACK</span>
                {props.content}
            </div>
        </div>
    )
}

export default Popup