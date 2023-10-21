import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from 'react';

export const MyContext = createContext();

function App() {
	const [ location, setLocation ] = useState("");


	return (
		<div>
			<MyContext.Provider value={{ location, setLocation }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />

				</Routes>
			</MyContext.Provider>
		</div>
	);
}

export default App;