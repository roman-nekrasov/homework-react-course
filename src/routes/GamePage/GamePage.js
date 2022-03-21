import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { pokemons } from '../../assets/pokemons'
import style from './style.module.css'


const GamePage = () => {
	const navigate = useNavigate()
	const [cards, setCards] = useState(pokemons)

	const onClickCard = (id) => {
		setCards(prevstate => {
			return Array.from(prevstate, (item) => {
				if (item.id === id) {
					item.active = true;
				}
				return item
			})
		})
	}

	const handleClickButton = () => {
		navigate('/')
	}

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.text}>This is the GamePage!</div>
				<button className={style["switch-button"]} onClick={handleClickButton}>Go to HomePage</button>
			</div>
			<div className={style.flex}>
				{
					cards.map(({ id, type, values, name, img, active }) => <PokemonCard
						key={id}
						id={id}
						type={type}
						values={values}
						name={name}
						img={img}
						isActive={active}
						onClickCard={onClickCard}
					/>)
				}
			</div>
		</>
	)
}

export default GamePage