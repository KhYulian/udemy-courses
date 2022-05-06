import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { useState, useRef } from 'react';

const isEmailValid = email => {
	return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
		email
	);
};

const SimpleInput = props => {
	const [enteredName, setenteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [nameIsValid, setNameIsValid] = useState(null);
	const [emailIsValid, setEmailIsValid] = useState(null);

	const nameInputRef = useRef();
	const emailInputRef = useRef();

	const nameInputChangeHandler = event => {
		setenteredName(event.target.value);

		if (nameInputRef.current.value.trim() === '') return setNameIsValid(false);
		setNameIsValid(true);
	};
	const nameInputBlurHandler = event => {
		if (enteredName.trim() === '') return setNameIsValid(false);
	};

	const emailInputChangeHandler = event => {
		setEnteredEmail(event.target.value);

		if (isEmailValid(emailInputRef.current.value)) return setEmailIsValid(true);
		setEmailIsValid(false);
	};
	const emailInputBlurHandler = event => {
		if (!isEmailValid(event.target.value)) return setEmailIsValid(false);
	};

	const formSubmitionHandler = event => {
		event.preventDefault();
		// Chech if user entered value.
		if (enteredName.trim() === '') setNameIsValid(false);
		if (!isEmailValid(enteredEmail)) return setEmailIsValid(false);

		setenteredName('');
		setEnteredEmail('');
		setNameIsValid(null);
		setEmailIsValid(null);
	};

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					ref={nameInputRef}
					className={nameIsValid === false ? 'invalid' : undefined}
					type="text"
					value={enteredName}
					placeholder={`Plese, enter your name${
						nameIsValid === toHaveFormValues ? ' !!!' : '.'
					}`}
					id="name"
				/>
			</div>

			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					ref={emailInputRef}
					className={emailIsValid === false ? 'invalid' : undefined}
					type="email"
					value={enteredEmail}
					placeholder={`Plese, enter your email${
						emailIsValid === false ? ' !!!' : '.'
					}`}
					id="email"
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
