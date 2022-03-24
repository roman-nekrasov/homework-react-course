import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import style from './style.module.css';

const BoardPage = () => {
	const [board, setBoard] = useState([])
	const navigate = useNavigate()
	const { selectedPokemons } = useContext(PokemonContext)

	useEffect(() => {
		if (Object.keys(selectedPokemons).length === 0) {
			navigate('/game')
		}
	})

	useEffect(() => {
		let isMounted = true
		async function fetchBoard() {
			try {
				const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')
				const boardRequest = await boardResponse.json();
				if (isMounted) setBoard(boardRequest.data);
			} catch (e) {
				console.error(e);
			}
		}
		fetchBoard();

		return () => { isMounted = false };
	}, [])

	const onClickBoard = (position) => {
		console.log('####: position', position);
	}

	return (
		<div className={style.root}>
			<div className={style.playerOne}>
				{
					selectedPokemons.map(({ dbKey, id, type, values, name, img, active }) => <PokemonCard
						key={dbKey}
						id={id}
						type={type}
						values={values}
						name={name}
						img={img}
						isActive={active}
						minimize={true}
						className={style.card}
					/>)
				}
			</div>
			<div className={style.board}>
				{
					board.length && board.map(item => (
						<div
							key={item.position}
							className={style.boardPlate}
							onClick={() => !item.card && onClickBoard(item.position)}
						>
							{
								item.card && <PokemonCard {...item} minimize />
							}
						</div>
					))
				}
			</div>

			<button className={style['game-button']} onClick={() => navigate('/game')} >Choose another pokemons</button>
		</div>
	);
};

export default BoardPage;