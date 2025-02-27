import "./style.css"

export default function Header(props) {
  /*
    Props cria propiedades no componentes
  */

  console.log(props);

   return(
    <header>
      <h1>{props.title}</h1>
    </header>
   )

}