/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import InfoCharacter from "./Components/infoCharacter";
import Header from "./Components/header";

function InfoPage() {


  return (
    <>
    <Header></Header>
    <InfoCharacter></InfoCharacter>
    </>
  )
}

export default InfoPage;