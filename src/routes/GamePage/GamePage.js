import { useState } from "react"
import { Outlet } from "react-router-dom"
import { PokemonContext } from "../../context/pokemonContext"

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([])

	const handleSelectPokemons = (pokemon, dbKey) => {
		setSelectedPokemons(prevState => {
			pokemon.dbKey = dbKey
			prevState.push(pokemon)
			return prevState
		})
	}

	return (
		<>
			<PokemonContext.Provider value={{
				selectedPokemons,
				onSelect: handleSelectPokemons
			}}>
				<Outlet />
			</PokemonContext.Provider>
		</>
	)
}

export default GamePage