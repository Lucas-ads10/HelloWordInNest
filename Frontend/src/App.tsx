import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

type Estado = {
  name: string;
  age: number;
  telephone: string;
};

const App: React.FC = () => {
  const [estado, setEstado] = useState<Estado>({
    name: '',
    age: 0,
    telephone: '',
  });

  const atualizarEstado = (campo: string, valor: string | number) => {
    setEstado({
      ...estado,
      [campo]: valor,
    });
  };

  const exibirValores = () => {
    console.log("Nome:", estado.name);
    console.log("Idade:", estado.age);
    console.log("Telefone:", estado.telephone);
  };

  const enviarDadosParaBackend = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user', estado);
      console.log('Resposta do servidor:', response.data);
      // Aqui você pode tratar a resposta do servidor, se necessário
    } catch (error) {
      console.error('Ocorreu um erro ao enviar os dados para o servidor:', error);
      // Aqui você pode tratar o erro, se necessário
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Formulário</h2>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={estado.name}
            onChange={(e) => atualizarEstado('name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={estado.age === 0 ? '' : estado.age}
            onChange={(e) => atualizarEstado('age', parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            value={estado.telephone}
            onChange={(e) => atualizarEstado('telephone', e.target.value)}
          />
        </div>
        <button onClick={enviarDadosParaBackend}>Enviar Dados</button>
      </div>
    </div>
  );
}

export default App;
