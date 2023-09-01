import { useState, useEffect } from 'react';

function Membro() {

  const [nome, setNome] = useState('');
  useEffect(()=>{
    setNome('Visitante');
  },[]);

  function entrar() {
    setNome('Joao');
  }

  return(
    <div>
      <h1>Bem vindo, {nome}</h1>
      <button onClick={entrar}>
        Entrar como joao
      </button>
      <button onClick={() => setNome('Visitante')}>
        Sair
      </button >
    </div>
  )
}

export default Membro;