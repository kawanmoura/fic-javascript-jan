import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ImgCard from "./Components/imgCard";
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-1.jpg";
import img3 from "../assets/img-1.jpg";


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


        <ImgCard caption="Uma imagem legal" newImg={img1} />
        <ImgCard caption="Uma imagem legal" newImg={img2} />
        <ImgCard caption="Uma imagem legal" newImg={img3} />
      

      </div>
    </>
  )
}

export default App
