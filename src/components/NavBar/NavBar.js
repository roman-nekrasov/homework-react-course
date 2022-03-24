import { Link } from 'react-router-dom'

import style from './style.module.css'
import cn from 'classnames'

const NavBar = ({ isActive, onClickButton, bgActive = true }) => {


	return (
		<>
			<nav className={cn(style.root, { [style.bgActive]: bgActive })}>
				<div className={style.navWrapper}>
					<Link to={'/'} className={style.brand}>
						PM BATTLE
					</Link>
					<div onClick={onClickButton} className={cn(style.menuButton, { [style.active]: isActive })}>
						<span />
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar