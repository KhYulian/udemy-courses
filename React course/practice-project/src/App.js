import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const usersDefault = [{ username: 'Yulian', age: 21, id: Math.random() }];

	const [users, setusers] = useState(usersDefault);

	function userAddedHandler(username, age) {
		setusers(ps => [{ username, age, id: Math.random() }, ...ps]);
	}
	function deleteUserHandler(id) {
		setusers(ps => ps.filter(user => user.id !== id));
	}

	return (
		<div>
			<AddUser onAddUser={userAddedHandler} />
			<UsersList users={users} onDeleteUser={deleteUserHandler} />
		</div>
	);
}

export default App;
