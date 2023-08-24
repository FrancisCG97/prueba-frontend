import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {

    return (
        <>
            <div className="row">
                <div id="columns" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div id="header-container" className="container-fluid">
                        <button id="return-home" className="btn">
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