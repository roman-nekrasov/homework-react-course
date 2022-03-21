import { Outlet } from 'react-router-dom'

import MenuHeader from './MenuHeader/MenuHeader'
import Footer from './Footer/Footer'

const AppLayout = () => {
	return (
		<>
			<MenuHeader />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default AppLayout