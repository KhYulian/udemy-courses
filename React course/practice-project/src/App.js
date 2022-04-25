import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const usersDefault = [{ username: 'Yulian', age: 21 }];

	const [users, setusers] = useState(usersDefault);

	function userAddedHandler(user) {
		setusers(ps => [user, ...ps]);
	}

	return (
		<div>
			<AddUser onAddUser={userAddedHandler} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
