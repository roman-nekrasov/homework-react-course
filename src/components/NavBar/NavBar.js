import style from './style.module.css'
import cn from 'classnames'

const NavBar = ({ isActive, onClickButton }) => {


	return (
		<>
			<nav className={style.root}>
				<div className={style.navWrapper}>
					<p className={style.brand}>
						LOGO
					</p>
					<a href="/#" onClick={onClickButton} className={cn(style.menuButton, { [style.active]: isActive })}>
						<span />
					</a>
				</div>
			</nav>
		</>
	)
}

export default NavBar