import { useState } from "react"

import PokemonCard from "../../../../../components/PokemonCard/PokemonCard"

import style from './style.module.css'
import cn from 'classnames'

const PlayerBoard = ({ cards, left, onClickCard, player, isYourMove }) => {
	const [isSelected, setIsSelected] = useState(null)

	return (
		<>
			{
				cards.map(card => (
					<div key={card.dbKey || card.id}
						className={cn(style.cardBoard, { [style.left]: left, [style.isSelected]: isSelected === card.id })}
						onClick={() => {
							if (isYourMove) {
								setIsSelected(card.id)
								onClickCard && onClickCard({
									...card,
									player
								})
							}
						}}
					>
						<PokemonCard
							id={card.id}
							type={card.type}
							values={card.values}
							name={card.name}
							img={card.img}
							isActive
							minimize={true}
						/>
					</div>
				))
			}
		</>
	)
}

export default PlayerBoard