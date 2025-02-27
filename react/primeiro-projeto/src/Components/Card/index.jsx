import React from 'react'
import "./style.css"

export default function Card() {
    const lista = [
        {
          nome: "Projeto novo",
          responsavel: "Fernando Carlos",
          valor: 1200
        },
        {
          nome: "Projeto do Mar",
          responsavel: "Fonseca",
          valor: 4000
        },
        {
          nome: "Giovanni",
          responsavel: "Pedro",
          valor: 2000
        },
        {
          nome: "Fernanda",
          responsavel: "Pedro",
          valor: 990
        },
        {
          nome: "Corinthians",
          responsavel: "Augusto Melo",
          valor: 777
        }
    ];

    console.log(lista)

    return (
        <div className="card-container">
          {lista.map((item, index) => {
            return (
              <div className="card" key={index}>
                <h2>{item.nome}</h2>
                <p>{item.responsavel}</p>
                <strong>{item.valor}</strong>
                <hr />
              </div>
            )
          })}

    </div>
  )
}
