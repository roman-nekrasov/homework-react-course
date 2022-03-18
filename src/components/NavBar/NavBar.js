import style from './style.module.css'
import cn from 'classnames'

const NavBar = () => {
	return (
		<>
			<nav className={style.root}>
				<div className={style.navWrapper}>
					<p className={style.brand}>
						LOGO
					</p>
					<a href='#' className={cn(style.menuButton, style.active)}>
						<span />
					</a>
				</div>
			</nav>
		</>
	)
}

export default NavBar