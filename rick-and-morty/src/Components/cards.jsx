/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Cards() {

    const [character, setCharacter] = useState("");

    //Petición a la API
    useEffect(() => {
        axios.get(
            "https://rickandmortyapi.com/api/character"
        )

            .then(response => {
                setCharacter(response.data.results);
                showInfo();

            })
            .catch(error => {
                console.log(error)
            })

    }, []);


    //Función para mostrar data
    const showInfo = async () => {
        console.log(character);
    };


    //Función para mostrar más información en el modal
    const moreInfo = (character) => {
        setCharacter(character);
    }

    //Función para cerrar modal
    const closeInfo = () => {
        location.reload();
    }

    return (
        <>
            <div id="cards-row" className="row">
                <div id="info-cards" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    {Array.isArray(character) &&
                        character.map((char, index) => (
                            <div id="info-results" className="col-10 col-md-4 col-lg-3 m-2" key={index}>
                                <img src={char.image} className="card-img" alt="Character image" />
                                <div id="info-body" className="card-body">
                                    <h5 className="card-title">{char.name}</h5>
                                    <button id="more-information" type="button" className="btn" onClick={() => moreInfo(char)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> More info here! </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div id="modal-row" className="row">
                <div id="info-modal" className="col-6 col-sm-8 col-md-8 col-lg-10 col-xl-8">
                    {character && (
                        <div
                            className="modal"
                            id="staticBackdrop"
                            data-bs-keyboard="false"
                            tabIndex="3"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                            Character name: {character.name}
                                        </h1>
                                        <button type="button" className="btn-close" onClick={closeInfo} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={character.image}></img>
                                        <br></br>
                                        This character is from {character.species} specie
                                        <br></br>
                                        Its gender is {character.gender}
                                        <br></br>
                                        And is currently {character.status}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" id="close-btn" onClick={closeInfo} data-bs-dismiss="modal">
                                            Close info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
