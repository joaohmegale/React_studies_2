import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const cadastrar = (e) =>{
    
    alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);

    e.preventDefault();
  }

  return (
    <div>
      <h1>Novo usuario</h1>
      <form onSubmit={cadastrar}>
        <input type='text' placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
        <br/>
        <hr/>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <hr/>
        <input type='password' placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <hr/>
        
        <button type='submit'>Cadastrar</button>
      </form>
      
    </div>
  );

}
export default App;
