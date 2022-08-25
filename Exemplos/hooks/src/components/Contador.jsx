import { useState } from 'react' //importando o hook que lida com estado

function Contador() {
  const [contador, setContador] = useState(0) // usando o hook pra criar e atulizar um estado
  function somar() {
    setContador(contador + 1) //usando a atualizadora do estado quando o click soma for chamado
  }

  function diminuir() {
    setContador(contador - 1) //usando a atualizadora do estado quando o click diminuir for chamado
  }

  return(
    <div className="card">
      <button onClick={somar}>
        Soma 1
      </button>
      <h1>{contador}</h1>  
      {/* estou usando o estado que conforme interacao da pessoa usuária vai sendo alterado e refletido na tela */}
      <button onClick={diminuir}>
        Diminui 1
      </button>
    </div>
  )
}

export default Contador