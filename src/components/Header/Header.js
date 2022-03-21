import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

const Header = ({ title, descr }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/game')
	}

	return (
		<>
			<header className={style.root}>
				<div className={style.forest}></div>
				<div className={style.container}>
					<h1>{title}</h1>
					<p>{descr}</p>
					<button className={style["switch-button"]} onClick={handleClick}>Let's start the game!</button>
				</div>
				<div className={style.silhouette}></div>
				<div className={style.moon}></div>
			</header>
		</>
	)
}

export default Header