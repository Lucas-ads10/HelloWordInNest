import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

type State = {
  name: string;
  age: number;
  telephone: string;
};

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    name: '',
    age: 0,
    telephone: '',
  });

  const updateStatus = (field: string, value: string | number) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const sendDataToTheBackend = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user', state);
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
            value={state.name}
            onChange={(e) => updateStatus('name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={state.age === 0 ? '' : state.age}
            onChange={(e) => updateStatus('age', parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            value={state.telephone}
            onChange={(e) => updateStatus('telephone', e.target.value)}
          />
        </div>
        <button onClick={sendDataToTheBackend}>Enviar Dados</button>
      </div>
    </div>
  );
}

export default App;
