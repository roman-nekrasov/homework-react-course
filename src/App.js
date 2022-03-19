import { Routes, Route } from "react-router-dom"

import HomePage from "./routes/HomePage/HomePage"
import GamePage from "./routes/GamePage/GamePage"
import AboutPage from "./routes/AboutPage/AboutPage"
import ContactPage from "./routes/ContactPage/ContactPage"
import NotFound from "./routes/NotFound/NotFound"

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/game" element={<GamePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
export default App