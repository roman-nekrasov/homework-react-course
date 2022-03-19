import { Link } from 'react-router-dom'
import style from './style.module.css'
import cn from 'classnames'

const Menu = ({ isActive, isDeactive }) => {

	return (
		<>
			<div className={cn(style.menuContainer, { [style.active]: isActive, [style.deactive]: isDeactive })}>
				<div className={style.overlay} />
				<div className={style.menuItems}>
					<ul>
						<li>
							<Link to="/">
								HOME
							</Link>
						</li>
						<li>
							<Link to="/game">
								GAME
							</Link>
						</li>
						<li>
							<Link to="/about">
								ABOUT
							</Link>
						</li>
						<li>
							<Link to="/contact">
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Menu