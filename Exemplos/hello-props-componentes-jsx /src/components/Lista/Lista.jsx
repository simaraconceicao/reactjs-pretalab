import filmes from './dados'

export const Lista = () => {
  return(
    <ul>
      {filmes.map(item => {
        return(
          <li key={item.id}>{item.nome}</li>
        )
      })}
    </ul>
  )
}
