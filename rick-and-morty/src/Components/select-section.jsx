import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function SelectSection() {

    //Función de filtrado

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
