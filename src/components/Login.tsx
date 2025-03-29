import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../services/api';

import Logo from '../public/logo.svg';

const Login = () => {
	const navigate = useNavigate();

	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
		rememberMe: false,
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const { username, password } = loginData;

			const response = await loginUser({ username, password });

			if (response.success) {
				navigate('/dashboard', { state: { username: loginData.username } });
			} else {
				setErrorMessage('Pogrešno korisničko ime ili lozinka.');
			}
		} catch (error) {
			setErrorMessage('Došlo je do greške, pokušajte kasnije.');
			console.error(error);
		}
	};

	const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginData((prevLoginData) => ({ ...prevLoginData, username: event.target.value }));
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginData((prevLoginData) => ({ ...prevLoginData, password: event.target.value }));
	};

	const handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginData((prevLoginData) => ({ ...prevLoginData, rememberMe: event.target.checked }));
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-softlabGreen gap-y-32">
			<img src={Logo} alt="Softlab Logo" className="w-48 h-12 mb-3" />
			<div className="w-full max-w-2xl p-16 bg-white rounded-lg shadow-2xl">
				<h2 className="text-4xl font-medium mb-16 text-center">Login</h2>
				{errorMessage && (
					<div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
						{errorMessage}
					</div>
				)}
				<form onSubmit={handleLogin} className="space-y-4">
					<div>
						<label htmlFor="username" className="sr-only">
							Korisničko ime
						</label>
						<input
							type="text"
							id="username"
							value={loginData.username}
							onChange={handleUsernameChange}
							required
							placeholder="Korisničko ime"
						/>
					</div>
					<div>
						<label htmlFor="password" className="sr-only">
							Lozinka
						</label>
						<input
							type="password"
							id="password"
							value={loginData.password}
							onChange={handlePasswordChange}
							required
							placeholder="Lozinka"
						/>
					</div>
					<div className="flex items-center mb-16">
						<input
							type="checkbox"
							id="remember"
							checked={loginData.rememberMe}
							onChange={handleRememberMeChange}
						/>
						<label
							htmlFor="remember"
							className="ml-2 text-sm text-gray-700 cursor-pointer"
						>
							Zapamti me
						</label>
					</div>
					<input type="submit" value="Prijava" />
				</form>
			</div>
		</div>
	);
};

export default Login;
