import style from './style.module.css'
import cardBack from '../../assets/card-back-side.jpg'
import cn from 'classnames'

const PokemonCard = ({ type, values, id, dbKey, name, img, isActive = true, onClickCard, minimize, className, isSelected, possession }) => {

	return (
		<>
			<div className={cn(className, style.pokemonCard, { [style.active]: isActive, [style.selected]: isSelected })}
				onClick={() => onClickCard && onClickCard(dbKey)} >
				<div className={style.cardFront}>
					<div className={cn(style.wrap, style.front, { [style.selected]: isSelected })}>
						<div className={cn(style.pokemon, style[type], style[possession])}>
							<div className={style.values}>
								<div className={cn(style.count, style.top)}>{values.top}</div>
								<div className={cn(style.count, style.right)}>{values.right}</div>
								<div className={cn(style.count, style.bottom)}>{values.bottom}</div>
								<div className={cn(style.count, style.left)}>{values.left}</div>
							</div>
							<div className={style.imgContainer}>
								<img src={img} alt={name} />
							</div>
							{
								!minimize && <div className={style.info}>
									<span className={style.number}>#{id}</span>
									<h3 className={style.name}>{name}</h3>
									<small className={style.type}>Type: <span>{type}</span></small>
								</div>
							}
						</div>
					</div>
				</div>

				<div className={style.cardBack}>
					<div className={cn(style.wrap, style.back)}>
						<img src={cardBack} alt="Сard Backed" />
					</div>
				</div>

			</div>
		</>
	)
}

export default PokemonCard