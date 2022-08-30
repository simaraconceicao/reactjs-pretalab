// quero criar um componente que captura o horário local e mostra na tela
function Relogio() { //criando o componente relogio
  const horario = new Date().toLocaleTimeString()

  return(
    <h2>{horario}</h2>
  )
}

export default Relogio