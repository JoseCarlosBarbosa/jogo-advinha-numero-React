import React, { useState } from 'react';
import './App.css';


// maquina chuta um numero, se a maquina acerta o numero eu clico em acerto, se errar clica em maior ou menor.
// a ideia do programa e contar quantas vezes a maquina vai chutar o numero até acertar

function App() {
  // chute e de 0 - 300

  //Entrada, rodando, fim
  const [estado, setEstado] = useState('ENTRADA')

  // quanto palpites ela ja deu (PALPITE)

  const [palpite, setPalpite] = useState(150)

  // numero de palpites
  const [numPalpites, setNumPalpites] = useState(1);

  // sempre vai dividindo por 2 até acerta. armazena 2 numeros, minimo e max
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }

  if (estado === 'ENTRADA') {
    return <button onClick={iniciarJogo}>Começar a Jogar ! </button>
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }
  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acerto = () => {
    setEstado("FIM")
  }
  if (estado === 'FIM') {
    return (
      <div>
        <p>acertei o numero de {palpite} com {numPalpites} chutes! </p>
        <button onClick={iniciarJogo}>
          Iniciar Novamente
        </button>
      </div>
    )
  }
  return (
    <div className="App">

      <p>Seu numero e {palpite} ?</p >

      <button onClick={menor}>
        Menor
      </button>
      <button onClick={acerto}>
        Acerto
      </button>
      <button onClick={maior}>
        Maior
      </button>
    </div>
  );
}

export default App;
