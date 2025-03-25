import { useState } from 'react';

import Modal from './Modal';

interface HeaderProps {
	username: string;
}

const Header = ({ username }: HeaderProps) => {
	const [visible, setVisible] = useState(false);

	const toggleModal = () => setVisible((prevVisible) => !prevVisible);

	return (
		<>
			<header className="bg-softlab text-white p-4">
				<div className="flex justify-between items-center">
					<div className="text-xl font-medium">{`Dobrodošli: ${username}`}</div>
					<button
						className="bg-softlab-teal hover:bg-softlab-teal/90 text-white px-4 py-2 rounded-md cursor-pointer"
						onClick={toggleModal}
					>
						Open Modal
					</button>
				</div>
			</header>

			<Modal visible={visible} setVisible={setVisible} />
		</>
	);
};

export default Header;
