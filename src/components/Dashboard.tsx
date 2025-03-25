import { useLocation } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => {
	const location = useLocation();
	const username = location.state?.username;

	return (
		<div className="dashboard-wrapper">
			<Header username={username} />
		</div>
	);
};

export default Dashboard;
