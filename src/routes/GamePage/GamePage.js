import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'

import { pokemons } from '../../assets/pokemons'
import style from './style.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const GamePage = () => {
	const navigate = useNavigate()
	const [activeCards, setActiveCards] = useState(cards(pokemons))

	function cards(cards) {
		const defaultCardsStatus = {}
		cards.forEach(card => {
			defaultCardsStatus[card.id] = false
		})
		return defaultCardsStatus
	}

	const onClickCard = (id) => {
		setActiveCards(prevstate => {
			return { ...prevstate, ...{ [id]: !prevstate[id] } }
		})
	}

	const handleClickButton = () => {
		navigate('/')
	}

	return (
		<>
			<MenuHeader />
			<div className={style.wrapper}>
				<div className={style.text}>This is the GamePage!</div>
				<button className={style["switch-button"]} onClick={handleClickButton}>Go to HomePage</button>
			</div>
			<div className={style.flex}>
				{
					pokemons.map(item => <PokemonCard
						key={item.id}
						id={item.id}
						type={item.type}
						values={item.values}
						name={item.name}
						img={item.img}
						isActive={activeCards[item.id]}
						onClickCard={onClickCard}
					/>)
				}
			</div>
			<Footer />
		</>
	)
}

export default GamePage