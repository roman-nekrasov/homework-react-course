import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'

import style from './style.module.css'

const AboutPage = () => {
	return (
		<>
			<MenuHeader />
			<div className={style.wrap}>AboutPage</div>
			<Footer />
		</>
	)

}

export default AboutPage