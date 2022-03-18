import style from './style.module.css'
import cn from 'classnames'

const Menu = ({ isActive }) => {
	// [style.deactive]: !isActive

	return (
		<>
			<div className={cn(style.menuContainer, { [style.active]: isActive, [style.deactive]: !isActive })}>
				<div className={style.overlay} />
				<div className={style.menuItems}>
					<ul>
						<li>
							<a href="#">
								HOME
							</a>
						</li>
						<li>
							<a href="#">
								GAME
							</a>
						</li>
						<li>
							<a href="#">
								ABOUT
							</a>
						</li>
						<li>
							<a href="#">
								CONTACT
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Menu