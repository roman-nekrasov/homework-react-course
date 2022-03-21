import style from './style.module.css'
import cn from 'classnames'

const NavBar = ({ isActive, onClickButton, bgActive = true }) => {


	return (
		<>
			<nav className={cn(style.root, { [style.bgActive]: bgActive })}>
				<div className={style.navWrapper}>
					<p className={style.brand}>
						LOGO
					</p>
					<div href="/#" onClick={onClickButton} className={cn(style.menuButton, { [style.active]: isActive })}>
						<span />
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar