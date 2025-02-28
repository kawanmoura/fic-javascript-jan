import React, { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0);

  // Função para aumentar o valor do estado
  const aumentar = () => {
    alert("Oláááá")
  }

  // Função para aumentar o valor do estado
  const dimunuir = () => {
    alert("Tchauuuuu")
  }


  return (
    <div style={{textAlign:"center", marginTop:'50px'}}>
        <h1>{count}</h1>

        <button onClick={aumentar} style={{marginRight: '10px'}}>Aumentar</button>
        <button onClick={dimunuir} style={{marginRight: '10px'}}>Diminuir</button>
    </div>
  )
}
