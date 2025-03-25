import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
		rememberMe: false,
	});

	const handleLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		navigate('/dashboard');
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
		<div className="flex justify-center items-center h-screen bg-softlabGreen">
			<div className="w-full max-w-2xl p-16 bg-white rounded-lg shadow-2xl">
				<h2 className="text-4xl font-bold mb-16 text-center">Login</h2>
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
