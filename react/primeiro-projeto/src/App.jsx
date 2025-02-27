import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ImgCard from "./Components/ImgCard";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";

import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Header title="Logo New" subTitle="Outros" />
        <Banner>
          <h1>Seja bem vindo!</h1>
          <p>Aqui você emcomtra as melhores ofertas!</p>
        </Banner>

        <ImgCard caption="Uma imagem legal" newImg={img1} />
        <ImgCard caption="Uma imagem legal" newImg={img2} />
        <ImgCard caption="Uma imagem legal" newImg={img3} />




      </div>
    </>
  )
}

export default App
