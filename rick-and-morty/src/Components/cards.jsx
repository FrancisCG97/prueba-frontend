/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cards() {
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')

            .then(response => {
                setCharacter(response.data);
                console.log(response.data);
            })

            .catch(error => {
                console.error('Error obteniendo la información:', error);
            });

    }, []);

    //Función para ir a página de más información
    const moreInfo = () => {
        navigate('/infoPage');
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                theme="dark"
            />
            <div className="row">
                <div className="col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <img className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p className="card-text"> Info de prueba </p>
                            <button className="btn" onClick={moreInfo}> More info </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
