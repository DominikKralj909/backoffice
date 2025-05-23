import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
