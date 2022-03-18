import { useState } from "react"
import HomePage from "./routes/HomePage/HomePage"
import GamePage from "./routes/GamePage/GamePage"

const App = () => {
	const [page, setPage] = useState('HomePage')

	const onChangePage = (page) => {
		setPage(page)
	}
	
	switch (page) {
		case "HomePage": 
			return <HomePage onChangePage={onChangePage} />
		case "GamePage": 
			return <GamePage onChangePage={onChangePage} />
		default:
			return <HomePage />
	}
}

export default App