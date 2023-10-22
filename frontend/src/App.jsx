import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Workspace from './pages/Workspace'
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from 'react';

export const MyContext = createContext();

function App() {
	const [ location, setLocation ] = useState("Cambridge");

	return (
		<div>
			<MyContext.Provider value={{ location, setLocation }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/workspace' element={<Workspace />} />
				</Routes>
			</MyContext.Provider>
		</div>
	);
}

export default App;