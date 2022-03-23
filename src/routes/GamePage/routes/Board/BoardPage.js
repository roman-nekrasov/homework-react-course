import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import style from './style.module.css';

const BoardPage = () => {
	const navigate = useNavigate()
	const pokemonsContext = useContext(PokemonContext)

	console.log(pokemonsContext);

	return (
		<div className={style.root}>
			<div className={style.playerOne}>
				{
					pokemonsContext.selectedPokemons.map(({ dbKey, id, type, values, name, img, active }) => <PokemonCard
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
				<div className={style.boardPlate}>1</div>
				<div className={style.boardPlate}>2</div>
				<div className={style.boardPlate}>3</div>
				<div className={style.boardPlate}>4</div>
				<div className={style.boardPlate}>5</div>
				<div className={style.boardPlate}>6</div>
				<div className={style.boardPlate}>7</div>
				<div className={style.boardPlate}>8</div>
				<div className={style.boardPlate}>9</div>
			</div>

			<button className={style['game-button']} onClick={() => navigate('/game')} >Choose another pokemons</button>
		</div>
	);
};

export default BoardPage;