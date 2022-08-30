// Crie um componente que transforma o texto passado em minusculo

function Lowercase(props) {
  const textoInserido = props.info  // o texto sera inserido quando for usar o componente no app
  const textoTransformado = textoInserido.toLowerCase() // transforma o texto recebido em minusculo

  return (
    <p>{textoTransformado}</p>
  )
}

export default Lowercase
