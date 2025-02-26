import Header from "./assets/Components/Header";
import Banner from "./assets/Components/Banner";
import ImgCard from "./assets/Components/imgCard";

import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Header title="Logo New" />
        <Banner>
          <h1>Bem-Vindo ao Meu Site</h1>
          <p>Aqui você encontra as melhores oportunidades</p>
        </Banner>

        <ImgCard caption="Uma imagem legal"/>
      

      </div>
    </>
  )
}

export default App
