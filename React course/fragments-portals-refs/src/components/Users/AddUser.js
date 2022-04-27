import React, { useState, useRef } from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// Refs allow us to get access to other DOM elements and work with them.

const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = event => {
		event.preventDefault();
		// console.log(nameInputRef);
		// console.log(nameInputRef.current.value);
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).'
			});
			return;
		}
		props.onAddUser(enteredName, enteredUserAge);
		// setEnteredUsername('');
		// setEnteredAge('');
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	// const usernameChangeHandler = event => {
	// 	setEnteredUsername(event.target.value);
	// };

	// const ageChangeHandler = event => {
	// 	setEnteredAge(event.target.value);
	// };

	const errorHandler = () => {
		setError(null);
	};

	return (
		// <>{content}</> or <React.Fragment>{content}</React.Fragment>
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						ref={nameInputRef}
						id="username"
						type="text"
						// value={enteredUsername}
						// onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						ref={ageInputRef}
						id="age"
						type="number"
						// value={enteredAge}
						// onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
