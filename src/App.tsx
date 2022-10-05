import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"

const App = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	)
}

export default App
