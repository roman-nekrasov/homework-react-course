import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'

import { pokemons } from '../../assets/pokemons'
import style from './style.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

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
			<MenuHeader />
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
			<Footer />
		</>
	)
}

export default GamePage