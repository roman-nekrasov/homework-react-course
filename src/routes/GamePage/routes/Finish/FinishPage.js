import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PokemonContext } from "../../../../context/pokemonContext"
import { set, push } from 'firebase/database'
import { dbRef } from '../../../../service/firebase'

import PokemonCard from "../../../../components/PokemonCard/PokemonCard"

import style from './style.module.css'
import cn from 'classnames'

const FinishPage = () => {
	const { playersCards, isWin } = useContext(PokemonContext)
	const navigate = useNavigate()

	const [isAchived, setIsAchived] = useState(null)
	console.log(playersCards);

	useEffect(() => {
		if (playersCards.length === 0) {
			navigate('/game')
		}
	}, [navigate, playersCards])

	const endGame = () => {
		if (isAchived) {
			const newPokemonRef = push(dbRef);
			const achivedPokemon = playersCards[1].filter(item => item.id === isAchived)[0];
			set(newPokemonRef, { ...achivedPokemon })
		}
		console.log('click');
		navigate('/game')
	}

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.playercards}>
					{
						playersCards.length && playersCards[0].map(item => <PokemonCard
							className={style.card}
							key={item.dbKey || item.id}
							id={item.id}
							type={item.type}
							values={item.values}
							name={item.name}
							img={item.img}
							minimize
						/>)
					}
				</div>
				<button className={style['game-button']} onClick={() => endGame()} >END GAME</button>
				<div className={style.playercards}>
					{
						playersCards.length && playersCards[1].map(item =>
							<div key={item.dbKey || item.id} className={cn(style.opponent, { [style.achived]: isAchived === item.id })} onClick={() => isWin && setIsAchived(item.id)}>
								<PokemonCard
									className={style.card}
									key={item.id}
									id={item.id}
									type={item.type}
									values={item.values}
									name={item.name}
									img={item.img}
									minimize
									achived={isAchived === item.id}
								/>
							</div>
						)
					}
				</div>
			</div>
		</>
	)
}

export default FinishPage