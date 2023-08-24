import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function SelectSection() {


    return (
        <>
            <select className="form-select" aria-label="Default select example">
                <option> Filter by species </option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
                <option> Filter by status </option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </>
    )


}

export default SelectSection;
