import { Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "./components/AppLayout"
import HomePage from "./routes/HomePage/HomePage"
import GamePage from "./routes/GamePage/GamePage"
import AboutPage from "./routes/AboutPage/AboutPage"
import ContactPage from "./routes/ContactPage/ContactPage"
import NotFound from "./routes/NotFound/NotFound"

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Route>
			<Route path="/404" element={<NotFound />} />
		</Routes>
	)
}
export default App