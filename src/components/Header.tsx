import { useState } from 'react';

import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
	username: string;
}

const Header = ({ username }: HeaderProps) => {
	const navigate = useNavigate();

	const [visible, setVisible] = useState(false);

	const toggleModal = () => setVisible((prevVisible) => !prevVisible);
	const handleLogout = () => {
		navigate('/');
	};

	return (
		<>
			<header className="bg-softlab text-white p-4">
				<div className="flex justify-between items-center">
					<div className="text-xl font-medium">{`Dobrodošli: ${username}`}</div>
					<button
						className="bg-softlab-teal hover:bg-softlab-teal/90 text-white px-4 py-2 rounded-md cursor-pointer"
						onClick={handleLogout}
					>
						Odjava
					</button>
				</div>
			</header>

			<Modal visible={visible} setVisible={setVisible} />
		</>
	);
};

export default Header;
