/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useState } from "react";



function SelectSection() {

    const [status, setStatus] = useState("");

    //Función de filtrado por status
    axios.get( 
        'https://rickandmortyapi.com/api/character/?name=rick&status=alive'
    )
        .then(function (response) {
            setStatus(response.data.results);
        })
        .catch(function (error) {
            console.error(error);
        });


    return (
        <>
            <div className="row">
                <div id="select-columns">
                    <div id="selects" className="col col-8 col-sm-4 col-md-5 col-lg-4 col-xl-4">
                        <select className="form-select" aria-label="Default select example">
                            <option> Filter by species </option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div id="selects" className="col col-8 col-sm-4 col-md-5 col-lg-4 col-xl-4">
                        <select className="form-select" aria-label="Default select example">
                            <option> Filter by status </option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )


}

export default SelectSection;
