import { useState, useEffect } from 'react'

function Busca() {
  const [pokemons, setPokemons] = useState([]) // guarda as informacoes que vem da api
  const [busca, setBusca] = useState('') //guarda valor digitado pelo usuario
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]) //

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  useEffect(() => {
    setPokemonsFiltrados(pokemons.filter(pokemon => {
      return pokemon.name.includes(busca)
    }))
  },[busca, pokemons])

  function capturaBusca(e) {
    setBusca(e.target.value)
  }
  
  return(
    <>
      <input onChange={capturaBusca} placeholder="digite um personagem" />
      <div className="cards">
        {pokemonsFiltrados.map(pokemon => {
          return(
            <div key={pokemon.name} className="card">
              <h2>{pokemon.name}</h2>
            </div>
          )
        })}
        
      </div>
    </>
  )
}

export default Busca


// abrir o projeto no vscode e criar um componente chamado busca