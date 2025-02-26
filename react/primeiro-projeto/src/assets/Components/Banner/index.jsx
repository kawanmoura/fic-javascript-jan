import "./style.css";

export default function (props) {

    /*
        O children permite que você passe e renderize
        conteúdo dinâmico dentro de um componente com react
    */

    return (
        <div className="bannerStyle">
            {props.children}
        </div>
    )
}