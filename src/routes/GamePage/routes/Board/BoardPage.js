import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import style from './style.module.css';

const BoardPage = () => {
	const [board, setBoard] = useState([])
	const [player2, setPlayer2] = useState([])
	const navigate = useNavigate()
	const { selectedPokemons } = useContext(PokemonContext)

	const BOARD_URL = 'https://reactmarathon-api.netlify.app/api/board';
	const PLAYER2_URL = 'https://reactmarathon-api.netlify.app/api/create-player'

	useEffect(() => {
		if (Object.keys(selectedPokemons).length === 0) {
			navigate('/game')
		}
	})

	useEffect(() => {
		let isMounted = true
		async function fetchBoard() {
			try {
				const boardResponse = await fetch(BOARD_URL);
				const boardRequest = await boardResponse.json();
				if (isMounted) setBoard(boardRequest.data);

				const player2Response = await fetch(PLAYER2_URL);
				const player2Request = await player2Response.json();
				if (isMounted) setPlayer2(player2Request.data);
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
			<div className={style.playerTwo} >
				{
					player2.map(({ id, type, values, name, img }) => <PokemonCard
						key={id}
						id={id}
						type={type}
						values={values}
						name={name}
						img={img}
						isActive
						minimize={true}
						className={style.card}
					/>)
				}
			</div>

			<button className={style['game-button']} onClick={() => navigate('/game')} >Choose another pokemons</button>
		</div>
	);
};

export default BoardPage;

	// Для маленьких екранів. При появі скролбару div з playerTwo змішується вліво на ширину скроллбару.
	// Треба пофіксити, почав тут з записом в inline стиль div'a playerTwo

	// const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth) або через функцію

	// function scrollbarWidth() {
	// 	let documentWidth = parseInt(document.documentElement.clientWidth);
	// 	let windowsWidth = parseInt(window.innerWidth);
	// 	let scrollbarWidth = (windowsWidth - documentWidth) / windowsWidth * 100;
	// 	let rightMargin = `${5 - scrollbarWidth}vw`;
	// 	console.log(rightMargin)
	// 	return rightMargin;
	// }