import style from './style.module.css'
import cardBack from "../../assets/card-back-side.jpg"

const PokemonCard = ({type, values, id, name, img}) => {
	return (
		<>
			<div className={style.root}>
				<div className={style.pokemonCard}>
					<div className={style.cardFront}>
						<div className={`${style.wrap} ${style.front}`}>
							<div className={`pokemon ${type}`}>
								<div className={style.values}>
									<div className={`${style.count} ${style.top}`}>{values.top}</div>
									<div className={`${style.count} ${style.right}`}>{values.right}</div>
									<div className={`${style.count} ${style.bottom}`}>{values.bottom}</div>
									<div className={`${style.count} ${style.left}`}>{values.left}</div>
								</div>
								<div className={style.imgContainer}>
									<img src={img} alt={name} />
								</div>
								<div className={style.info}>
									<span className={style.number}>#{id}</span>
									<h3 className={style.name}>{name}</h3>
									<small className={style.type}>Type: <span>{type}</span></small>
								</div>
							</div>
						</div>
					</div>

					<div className={style.cardBack}>
						<div className={`${style.wrap} ${style.back}`}>
							<img src={cardBack} alt="Сard Backed" />
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default PokemonCard