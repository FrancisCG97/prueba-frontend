/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cards() {

    const navigate = useNavigate();
    const [character, setCharacter] = useState("");

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


    //Función para ir a página de más información
    const moreInfo = (character) => {
        setCharacter(character);
    }

    const closeInfo = () => {
        setCharacter(null);
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
                                    <button type="button" className="btn" onClick={() => moreInfo(char)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> More info here! </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div id="cards-row" className="row">
                <div id="info-cards" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    {character && (
                        <div
                            className="modal-dialog modal-dialog-scrollable"
                            id="staticBackdrop"
                            // data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="3"
                        // aria-labelledby="staticBackdropLabel"
                        // aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                            {character.name}
                                        </h1>
                                        <button type="button" className="btn-close" onClick={closeInfo} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">{character.species} {character.status} {character.gender} {character.type}</div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeInfo}>
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Understood
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* {Array.isArray(character) &&
                character.map((char, index) => (
                    <div className="modal-dialog modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" key={index}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel"> {char.name} </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}

        </>
    )
}
