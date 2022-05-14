import React, { useState } from 'react';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
	const [enteredUsername, setenteredUsername] = useState('');
	const [enteredAge, setenteredAge] = useState('');
	const [error, setError] = useState();

	function submitHandler(ev) {
		ev.preventDefault();

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter valid name and age.'
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Age should be greater than 0.'
			});

			return;
		}

		props.onAddUser(enteredUsername, enteredAge);

		setenteredUsername('');
		setenteredAge('');
	}

	function usernameChangeHandler(ev) {
		setenteredUsername(ev.target.value);
	}
	function userAgeChangeHandler(ev) {
		setenteredAge(ev.target.value);
	}
	function closeModalHandler() {
		setError(null);
	}

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onCloseModal={closeModalHandler}
				/>
			)}
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
		</div>
	);
}

export default AddUser;
