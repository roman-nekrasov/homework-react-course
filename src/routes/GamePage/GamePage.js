import style from './style.module.css'

const GamePage = ({ onChangePage }) => {
	const handleClick = () => {
		onChangePage && onChangePage('HomePage')
	}

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.text}>This is the GamePage!</div>
				<button className={style["switch-button"]} onClick={handleClick}>Switch to HomePage</button>
			</div>
		</>
	)
}

export default GamePage