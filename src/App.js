import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('teste@teste.com')
  const [senha, setSenha] = useState('123123')
  const [sexo, setSexo] = useState({sexo: 'masculino'})

  const trocaEmail = (e) =>{
    setEmail(e.target.value);
  }

  const trocaSexo = (e) =>{
    setSexo(e.target.value);
  }

  return (
    <div>
      <h2>Login</h2>
      Email:
      <input type='email' name='email' value={email} 
          onChange={trocaEmail}/>
      <br />
      Senha: 
      <input type = 'password' name='senha' value={senha}
          onChange={(e) => setSenha(e.target.value) }/>
      Sexo:
      <select name='sexo' value={sexo} onChange={trocaSexo}>
        <option value='masculino'>masculino</option>
        <option value='feminino'>feminino</option>
      </select>
      <div>
        <h3>{email}</h3>
        <h3>{senha}</h3>
        <h3>{sexo}</h3>
      </div>
    </div>
  );

}
export default App;
