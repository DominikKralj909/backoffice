import axios from 'axios';

const baseUrl = 'https://localhost:7006/api/BackOffice';
const baseUrlMock = 'http://localhost:3000/users';

interface LoginData {
	username: string;
	password: string;
}

const loginUser = async (loginData: LoginData) => {
	try {
		const response = await axios.get(baseUrlMock);
		const users = response.data;

		const user = users.find(
			(u: { username: string; password: string }) =>
				u.username === loginData.username && u.password === loginData.password,
		);

		if (user) {
			return { success: true, message: 'Login successful' };
		} else {
			return { success: false, message: 'Invalid username or password' };
		}
	} catch (error) {
		console.error('Error during login:', error);
		throw error;
	}
};

const sendMobileNotification = async (phoneNumber: string) => {
	try {
		const response = await axios.post(baseUrl, { Broj: phoneNumber });
		return response.data;
	} catch (error) {
		console.error('Error sending mobile notification:', error);
		throw error;
	}
};

export { sendMobileNotification, loginUser };
