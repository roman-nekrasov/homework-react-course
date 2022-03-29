import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedPokemons: [],
	playersCards: [],
	isWin: null,
	// onEndGame: handleEndGame,
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		addPokemon: (state, action) => {
			state.selectedPokemons = [...state.selectedPokemons, action.payload]
		},
		removePokemon: (state, action) => {
			state.selectedPokemons = state.selectedPokemons.filter(item => item.id !== action.payload)
		},
		addPlayersCards: (state, action) => {
			state.playersCards = action.payload
		},
		setWin: state => {
			state.isWin = true;
		},
		setDefaultValues: state => {
			state = initialState;
		}
	}
})

export const { addPokemon, removePokemon, addPlayersCards, setWin, setDefaultValues } = gameSlice.actions;

export const selectPokemons = state => state.game.selectedPokemons

export default gameSlice.reducer