import "./style.css"

export default function Header(props) {
  /*
    Props cria propiedades no componentes
  */


   return(
    <header>
      <h1>{props.title}</h1>
    </header>
   )

}