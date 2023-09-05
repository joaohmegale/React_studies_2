import { useState } from 'react';
import  Botao  from './components/Botao/index'
import './App.css';

function App() {
  const [frases, setFrases] = useState([
    'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
    ]);

    const[textoFrase, setTextoFrase] = useState('');

    const quebraBiscoito = () =>{
      let numeroRandom = Math.floor(Math.random() * frases.length);
      setTextoFrase('"' + frases[numeroRandom] + '"');
    } 

  return (
    <div className='container'>
      <img className='img' src={require('./components/assets/biscoito.png')}/>
      <Botao nome="Abrir biscoito" acaoBtn={quebraBiscoito}/>
      <h3 className='textoFrase'>{textoFrase}</h3>
    </div>
  );

}

export default App;
