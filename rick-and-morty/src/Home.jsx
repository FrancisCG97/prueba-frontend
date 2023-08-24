/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Header from "./Components/header";
import Cards from "./Components/cards";
import SelectSection from "./Components/select-section";

function Home() {


  return (
    <>
    <Header></Header>
    <SelectSection></SelectSection>
    <Cards></Cards>
    </>
  )
}

export default Home;
