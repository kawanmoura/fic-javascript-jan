import React from 'react';
import './cadastro.css';

export default function Cadastro(props) {
  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" />
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
