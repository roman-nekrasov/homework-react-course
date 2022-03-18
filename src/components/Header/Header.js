import style from './style.module.css'	

const Header = ({title, descr, onClickButton}) => {
	// Перевірка, чи прийшли пропси:
	// console.log("Title: ", title, "Description: ", descr)

	const handleClick = () => {
		onClickButton && onClickButton('GamePage')
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
			</header>
		</>
	)
}

export default Header