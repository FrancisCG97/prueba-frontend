/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    //Función para volver a Home
    const goHome = () => {
        navigate('/');
    }


    return (
        <>
            <div className="row">
                <div id="columns" className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div id="header-container" className="container-fluid">
                        <button id="return-home" className="btn" onClick={goHome}>
                            <p> The </p>
                            <img src="./src/Images/logo.png" alt="Logo" id="logo" className="align-text-top"></img>
                            <p> characters page! </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;