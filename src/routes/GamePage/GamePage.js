import { useState } from "react"
import { Outlet } from "react-router-dom"
import { PokemonContext } from "../../context/pokemonContext"

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([])
	const [playersCards, setplayersCards] = useState([])
	const [isWin, setIsWin] = useState(null)

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

	const handlePlayersCards = (cards) => {
		setplayersCards(cards)
	}

	const handleWin = (value) => {
		setIsWin(value)
	}

	const handleEndGame = () => {
		setplayersCards([])
		setIsWin(null)
		setSelectedPokemons([])
	}

	return (
		<>
			<PokemonContext.Provider value={{
				selectedPokemons,
				playersCards,
				isWin,
				onSelect: handleSelectPokemons,
				onFinishGame: handlePlayersCards,
				onWin: handleWin,
				onEndGame: handleEndGame,
			}}>
				<Outlet />
			</PokemonContext.Provider>
		</>
	)
}

export default GamePage