import { useState } from "react"
import { Outlet } from "react-router-dom"
import { PokemonContext } from "../../context/pokemonContext"

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([])

	const handleSelectPokemons = (pokemon, dbKey, isSelected) => {
		setSelectedPokemons(prevState => {
			if (isSelected) {
				pokemon.dbKey = dbKey
				return [...prevState, pokemon]
			} else {
				const pokemons = prevState.filter(item => item.dbKey !== dbKey)
				return [...pokemons]
			}
		})
	}

	const handleCLearPokemons = () => {
		setSelectedPokemons([])
	}

	return (
		<>
			<PokemonContext.Provider value={{
				selectedPokemons,
				newGame: null,
				onSelect: handleSelectPokemons,
				onStartGame: handleCLearPokemons,
			}}>
				<Outlet />
			</PokemonContext.Provider>
		</>
	)
}

export default GamePage