import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want To Do This?</h1>
                </div>
                <div className="body">
                    <p>The next page is awesome! You should visit that. You will enjoy it!!</p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal