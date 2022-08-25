import { useState, useEffect } from 'react'

function Search() {
  const [pokemons, setPokemons] = useState([])
  const [busca, setBusca] = useState('')
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  function handleInput(event) {
    setBusca(event.target.value)
  }

  useEffect(() => {
    setPokemonsFiltrados(pokemons.filter(pokemon => pokemon.name.includes(busca)))
  }, [busca, pokemons])

  return(
    <>
      <input onChange={handleInput} placeholder="digite um pokemon" />
        {pokemonsFiltrados.map(item => {
          return(
            <h2 key={item.name}>{item.name}</h2>
          )
        })}
    </>
  )
}

export default Search