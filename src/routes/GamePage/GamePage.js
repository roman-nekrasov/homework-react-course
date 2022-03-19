import { useNavigate } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'

import style from './style.module.css'

const GamePage = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/')
	}

	return (
		<>
			<MenuHeader />
			<div className={style.wrapper}>
				<div className={style.text}>This is the GamePage!</div>
				<button className={style["switch-button"]} onClick={handleClick}>Go to HomePage</button>
			</div>
			<Footer />
		</>
	)
}

export default GamePage