import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PokemonContext } from "../../../../context/pokemonContext"

import PokemonCard from "../../../../components/PokemonCard/PokemonCard"

import style from './style.module.css'

const FinishPage = () => {
	const { playersCards } = useContext(PokemonContext)
	const navigate = useNavigate()
	console.log(playersCards);

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.playercards}>
					{
						playersCards[0].map(item => <PokemonCard
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
				<button className={style['game-button']} onClick={() => navigate('/game')} >END GAME</button>
				<div className={style.playercards}>
					{
						playersCards[1].map(item => <PokemonCard
							className={style.card}
							key={item.id}
							id={item.id}
							type={item.type}
							values={item.values}
							name={item.name}
							img={item.img}
							minimize
						/>)
					}
				</div>
			</div>
		</>
	)
}

export default FinishPage