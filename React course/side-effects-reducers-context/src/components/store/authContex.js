import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {}, // for better IDE autocompletion
	onLogin: (email, password) => {}
});

export const AuthContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
		const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

		if (storedUserLoggedIn === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.setItem('isLoggedIn', '0');
		setIsLoggedIn(false);
	};
	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
