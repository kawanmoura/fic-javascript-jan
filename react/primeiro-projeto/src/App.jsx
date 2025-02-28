import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Count from "./Components/Count";
import Header from "./Components/Header";
import ImgCard from "./Components/ImgCard";
import Text from "./Components/Text";

import img1 from "./assets/img-1.jpg";
import logo from "./assets/download.png";

import React from 'react';

import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Button />

        <Header Title={logo} />

        <Count />

        <Banner>
          <h1>Seja bem vindo!</h1>
          <p>Aqui você emcontra as melhores ofertas!</p>
        </Banner>

        <Text />

        <div>
        <ImgCard caption="Uma imagem legal" newImg={img1} />
        </div>

        <Card />

      </div>
    </>
  )
}

export default App
