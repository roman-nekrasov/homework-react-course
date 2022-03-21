import { Link } from 'react-router-dom'
import style from './style.module.css'
import cn from 'classnames'

const MENU = [
	{
		title: 'HOME',
		to: '/',
	},
	{
		title: 'GAME',
		to: '/game',
	},
	{
		title: 'ABOUT',
		to: '/about',
	},
	{
		title: 'CONTACT',
		to: '/contact',
	},
]

const Menu = ({ isActive, onClickButton }) => {

	return (
		<>
			<div className={cn(style.menuContainer, { [style.active]: isActive, [style.deactive]: isActive === false ? true : false })}>
				<div className={style.overlay} />
				<div className={style.menuItems}>
					<ul>
						{
							MENU.map(({ title, to }) => (
								<li key={title}>
									<Link to={to} onClick={onClickButton}>
										{title}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Menu