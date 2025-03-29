import { useState, ChangeEvent, FormEvent } from 'react';

import { sendMobileNotification } from '../services/api';

interface ModalProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

const Modal = ({ visible, setVisible }: ModalProps) => {
	const [phoneNumber, setPhoneNumber] = useState('');

	const handlePhoneNumberChange = async (event: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
	};

	const handlePhoneNumberSubmit = async (event: FormEvent) => {
		event.preventDefault();

		try {
			const response = await sendMobileNotification(phoneNumber);
			console.log('Response:', response);
			setPhoneNumber('');
			alert('Phone number submitted successfully!');
		} catch (error) {
			alert('Failed to submit phone number. Please try again.');
		}
	};
	const handleModalClose = () => {
		setVisible(false);
		setPhoneNumber('');
	};

	if (!visible) return null;

	return (
		<div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
			<div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-lg space-y-6">
				<h2 className="text-2xl font-medium mb-4 text-center">Send Message to Phone</h2>
				<form className="space-y-6" onSubmit={handlePhoneNumberSubmit}>
					<div className="space-y-2">
						<label htmlFor="phoneNumber" className="sr-only">
							Phone Number
						</label>
						<input
							type="text"
							id="phoneNumber"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							required
							placeholder="Enter phone number"
						/>
					</div>
					<div className="flex justify-between items-center w-full max-w-[400px]">
						<button
							type="button"
							className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer py-2 px-4 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 max-w-[150px]"
							onClick={handleModalClose}
						>
							Poništi
						</button>
						<input type="submit" value="Pošalji" className="px-6 py-2 max-w-[150px]" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
