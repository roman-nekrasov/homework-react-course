import { Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "./components/AppLayout/AppLayout"
import HomePage from "./routes/HomePage/HomePage"
import GamePage from "./routes/GamePage/GamePage"
import AboutPage from "./routes/AboutPage/AboutPage"
import ContactPage from "./routes/ContactPage/ContactPage"
import StartPage from "./routes/GamePage/routes/Start/StartPage"
import BoardPage from "./routes/GamePage/routes/Board/BoardPage"
import FinishPage from "./routes/GamePage/routes/Finish/FinishPage"
import NotFound from "./routes/NotFound/NotFound"

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/game" element={<GamePage />}>
					<Route index element={<StartPage />} />
					<Route path='board' element={<BoardPage />} />
					<Route path='finish' element={<FinishPage />} />
				</Route>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Route>
			<Route path="/404" element={<NotFound />} />
		</Routes>
	)
}
export default App