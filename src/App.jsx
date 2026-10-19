import { useState } from 'react'
import './App.css'

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

function Visivel() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <hr />
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>
      {visivel && <p>O aviso está visível.</p>}
    </div>
  );
}

function Nome(){
  const [ nome , setNome ] = useState("")

  return (
    <div>
      <hr />
      <input 
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome || "visitante"}!</p>
    </div>
  )
}

function Desafio() {
  const [ nomed , setNomed ] = useState("")
   const [visiveld, setVisiveld] = useState(true)

  return (
      <div>
        <hr />
        <input 
          value={nomed}
          onChange={(evento) => setNomed(evento.target.value)}
          placeholder="Digite seu nome"
        />
        <button onClick={() => setVisiveld(!visiveld)}>
          {visiveld ? "Esconder saudação" : "Mostrar saudação"}
        </button>
        {visiveld && <p>Olá, {nomed || "visitante"}!</p>}
      </div>
  )
}

  function Count() {
    const [count, setCount] = useState(0)

    function Aument() {
      setCount((valorAnterior) => {
        if (valorAnterior === 10) {
          return 10
        }
        return valorAnterior + 1
      })
    }

    function Zerar() {
      setCount(0)
    }

    return (
      <div>
        <p>Valor atual: {count}</p>
        
        <button onClick={Aument}>Aumentar</button> 
        <button onClick={Zerar}>Zerar</button>   

        {count === 10 && (                         
          <p>Meta atingida!</p>
        )}
      </div>
    )
}
function App() {
  return (
    <>
      <Contador />
      <Visivel />  
      <Nome /> 
      <Desafio />
      <Count />
    </>
  )
}

export default App