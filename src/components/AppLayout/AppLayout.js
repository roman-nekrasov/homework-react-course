import { Outlet, useMatch } from 'react-router-dom'

import MenuHeader from '../MenuHeader/MenuHeader'
import Footer from '../Footer/Footer'
import style from './style.module.css'
import cn from 'classnames'

const AppLayout = () => {
	const isHomePage = useMatch('/')
	const isBoardPage = useMatch('/game/board')
	console.log(isBoardPage)

	return (
		<>
			<MenuHeader bgActive={isHomePage === null && isBoardPage === null} />
			<main>
				<div className={cn(style.wrap, { [style.fullscreen]: isHomePage !== null || isBoardPage !== null })}>
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default AppLayout