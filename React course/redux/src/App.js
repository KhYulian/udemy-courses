import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	return (
		<Fragment>
			<Header />
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <UserProfile />}
			<Counter />
		</Fragment>
	);
}

export default App;
