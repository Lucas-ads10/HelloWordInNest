import React, { useState } from 'react';
import './App.css';

type Estado = {
  nome: string;
  idade: number;
  telefone: string;
};

const App: React.FC = () => {
  const [estado, setEstado] = useState<Estado>({
    nome: '',
    idade: 0,
    telefone: '',
  });

  const atualizarEstado = (campo: string, valor: string | number) => {
    setEstado({
      ...estado,
      [campo]: valor,
    });
  };

  const exibirValores = () => {
    console.log("Nome:", estado.nome);
    console.log("Idade:", estado.idade);
    console.log("Telefone:", estado.telefone);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Formulário</h2>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={estado.nome}
            onChange={(e) => atualizarEstado('nome', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={estado.idade === 0 ? '' : estado.idade}
            onChange={(e) => atualizarEstado('idade', parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            value={estado.telefone}
            onChange={(e) => atualizarEstado('telefone', e.target.value)}
          />
        </div>
        <button onClick={exibirValores}>Exibir Valores</button>
      </div>
    </div>
  );
}

export default App;
