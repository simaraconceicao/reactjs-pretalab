function Formulario() {
  function ligaClick() {
    console.log('estou clicando')
  }

  function ligaInput(evento) {
    console.log(evento.target.value)
  }

  return(
    <div>
      <input onChange={ligaInput} placeholder="Digite seu nome" />
      <button onClick={ligaClick}>Enviar</button>
    </div>
  )
}

export default Formulario

// React Fragment - essa div fantasma segundo Simara

// Mostrar como capturar um input usando react
// Mostrar como ligar o click de um botão usando react

