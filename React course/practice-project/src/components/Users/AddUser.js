import { useState } from 'react';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

function AddUser(props) {
	const [enteredUsername, setenteredUsername] = useState('');
	const [enteredAge, setenteredAge] = useState('');

	function submitHandler(ev) {
		ev.preventDefault();

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
			return;
		if (+enteredAge < 1) return;

		setenteredUsername('');
		setenteredAge('');
	}

	function usernameChangeHandler(ev) {
		setenteredUsername(ev.target.value);
	}
	function userAgeChangeHandler(ev) {
		setenteredAge(ev.target.value);
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={submitHandler}>
				<label htmlFor="username">User Name: </label>
				<input
					onChange={usernameChangeHandler}
					value={enteredUsername}
					type="text"
					required
					id="username"
				/>
				<label htmlFor="age">Years: </label>
				<input
					onChange={userAgeChangeHandler}
					value={enteredAge}
					type="number"
					required
					id="age"
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
}

export default AddUser;
