import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import PlayerBoard from './components/PlayerBoard/PlayerBoard'
import ArrowChoice from './components/ArrowChoice/ArrowChoice';
import Result from './components/Result/Result';

import style from './style.module.css';

const BOARD_URL = 'https://reactmarathon-api.netlify.app/api/board';
const PLAYER2_URL = 'https://reactmarathon-api.netlify.app/api/create-player';

const counterWin = (board, player1, player2) => {
	let countPlayer1 = player1.length;
	let countPlayer2 = player2.length;

	board.forEach(item => {
		if (item.card.possession === 'blue') {
			countPlayer1++
		}
		if (item.card.possession === 'red') {
			countPlayer2++
		}
	})
	return [countPlayer1, countPlayer2]
}


const BoardPage = () => {
	const { selectedPokemons, onFinishGame, onWin } = useContext(PokemonContext)

	const [board, setBoard] = useState([])
	const [startCards, setStartCards] = useState([])
	const [player1, setPlayer1] = useState(() => {
		return Object.values(selectedPokemons).map(item => {
			return {
				...item,
				possession: 'blue'
			}
		})
	})
	const [player2, setPlayer2] = useState([])
	const [choseCard, setChoseCard] = useState(null)
	const [count, setCount] = useState(0)
	const [animationPlay, setAnimationPlay] = useState(true)
	const [isYourMove, setIsYourMove] = useState(!!Math.round(Math.random()))
	const [result, setResult] = useState(null)

	const navigate = useNavigate()

	useEffect(() => {
		if (Object.keys(selectedPokemons).length === 0) {
			navigate('/game')
		}
	})

	useEffect(() => {
		const timer = setTimeout(() => setAnimationPlay(false), 3800);
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		let isMounted = true
		async function fetchBoard() {
			try {
				const boardResponse = await fetch(BOARD_URL);
				const boardRequest = await boardResponse.json();
				if (isMounted) setBoard(boardRequest.data);

				const player2Response = await fetch(PLAYER2_URL);
				const player2Request = await player2Response.json();
				if (isMounted) {
					setPlayer2(() => {
						return player2Request.data.map(item => ({
							...item,
							possession: 'red'
						}))
					})
				};
			} catch (e) {
				console.error(e);
			}
		}
		fetchBoard();

		return () => { isMounted = false };
	}, [])

	const onClickBoard = async (position) => {
		const params = {
			position,
			card: choseCard,
			board,
		};

		const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		});

		const request = await res.json();


		if (choseCard.player === 1) {
			setPlayer1(prevState => prevState.filter(card => card.id !== choseCard.id))
		}
		if (choseCard.player === 2) {
			setPlayer2(prevState => prevState.filter(card => card.id !== choseCard.id))
		}
		setBoard(request.data)
		setCount(prevState => prevState + 1)
		setIsYourMove(prevState => !prevState)
	}

	useEffect(() => {
		if (player1.length === 5 && player2.length === 5) {
			setStartCards([player1, player2])
		}
	}, [player1, player2])

	useEffect(() => {
		if (count === 9) {
			const [count1, count2] = counterWin(board, player1, player2)
			if (count1 > count2) {
				setResult('win')
				onWin(true);
				onFinishGame(startCards)
				setTimeout(() => navigate('/game/finish'), 1500)
			} else if (count1 < count2) {
				setResult('lose')
				onFinishGame(startCards)
				setTimeout(() => navigate('/game/finish'), 1500)
			} else {
				setResult('draw')
				onFinishGame(startCards)
				setTimeout(() => navigate('/game/finish'), 1500)
			}

		}
	}, [count, board, player1, player2, navigate, onFinishGame, startCards, onWin])

	return (
		<div className={style.root}>
			<ArrowChoice
				isYourMove={isYourMove}
				animationPlay={animationPlay}
			/>
			{
				!animationPlay && isYourMove && <p className={style.yourMoveLeft}>Your move, Player 1!</p>
			}
			<div className={style.playerOne}>
				<PlayerBoard
					player={1}
					cards={player1}
					onClickCard={(card) => setChoseCard(card)}
					left={true}
					isYourMove={isYourMove} />
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
								item.card && <PokemonCard {...item.card} minimize isActive />
							}
						</div>
					))
				}
			</div>
			{
				!animationPlay && !isYourMove && <p className={style.yourMoveRight}>Your move, Player 2!</p>
			}
			<div className={style.playerTwo} >
				<PlayerBoard
					player={2}
					cards={player2}
					onClickCard={(card) => setChoseCard(card)}
					isYourMove={!isYourMove}
				/>
			</div>
			{
				result !== null && <Result type={result} />
			}
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