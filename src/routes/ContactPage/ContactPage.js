import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'

import style from './style.module.css'

const ContactPage = () => {
	return (
		<>
			<MenuHeader />
			<div className={style.wrap}>ContactPage</div>
			<Footer />
		</>
	)
}

export default ContactPage