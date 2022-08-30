import livrosTech from './dados'

export const List = () => {
  return(
    <>
      {
        livrosTech.map(item => {
          return(
            <h2 key={item.id}>{item.nome}</h2>
          )
        })
      }
    </>
  )
}