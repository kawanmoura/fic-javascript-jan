import React, { useState } from 'react'
import './count.css'


export default function Count() {
  const [count, setCount] = useState(0);

    // Função para aumentar o valor do estado
    const aumentar = () => {
      setCount(count + 1);
    }
    // Função para aumentar o valor do estado
    const dimunuir = () => {
      setCount(count - 1);
    }  

  return (
    <div className="count-container">
        <h1 className="count-value">{count}</h1>
        <button className="count-button" onClick={aumentar}>Aumentar</button>
        <button className="count-button" onClick={dimunuir}>Diminuir</button>
    </div>
  )
}
