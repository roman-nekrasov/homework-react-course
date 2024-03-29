import { Outlet, useMatch } from 'react-router-dom'

import MenuHeader from '../MenuHeader/MenuHeader'
import Footer from '../Footer/Footer'
import style from './style.module.css'
import cn from 'classnames'

const AppLayout = () => {
	const isHomePage = useMatch('/')

	return (
		<>
			<MenuHeader bgActive={isHomePage === null} />
			<main>
				<div className={cn(style.wrap, { [style.isHomePage]: isHomePage !== null })}>
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default AppLayout