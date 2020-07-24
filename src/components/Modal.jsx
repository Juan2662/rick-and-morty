import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'



export default function Modal (props){

    const [characters, setCharacters] = useState({
        positionCharacter: props.positionInital,
        data: props.characters,

    })

    const node = (
        <div className="container-modal">

            <div className="modal">
                <a
                    className={"arrow " + (characters.positionCharacter === 0 ? 'disabled' : 'left')}
                    onClick={
                        () => setCharacters({
                            ...characters,
                            positionCharacter: --characters.positionCharacter
                    })}

                ></a>
                <div className="modal-img">
                    <img src={characters.data[characters.positionCharacter].image} alt="[Image_character]" />
                </div>
                <div className="modal-description">
                    <div className="modal-data">
                        <div>
                            <h2>{characters.data[characters.positionCharacter].name}</h2>
                        </div>
                        <div>
                            <span>Status:</span>
                            <span>{characters.data[characters.positionCharacter].status}</span>
                        </div>
                        <div>
                            <span>Species:</span>
                            <span>{characters.data[characters.positionCharacter].species}</span>
                        </div>
                        <div>
                            <span>Gender:</span>
                            <span>{characters.data[characters.positionCharacter].gender}</span>
                        </div>
                        <div>
                            <span>Origin:</span>
                            <span>{characters.data[characters.positionCharacter].origin.name}</span>
                        </div>

                    </div>
                </div>
                <i className="fas fa-times arrowExitModal" onClick={props.onClose}></i>
                <a
                    className={"arrow " + (characters.positionCharacter === characters.data.length -1 ? 'disabled' : 'right')}
                    onClick={
                        () => setCharacters({
                            ...characters,
                            positionCharacter: ++characters.positionCharacter
                        })
                    }

                ></a>
            </div>

        </div>
    )

    return ReactDOM.createPortal(node, document.getElementById('modal'))

}
