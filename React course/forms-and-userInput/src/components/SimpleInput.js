import { useState, useRef } from 'react';
import useInput from '../hooks/use-input';

const isEmailValid = email => {
	return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
		email
	);
};

const SimpleInput = props => {
	const {
		value: enteredName,
		isValid: nameIsValid,
		hasError: nameInputHasError,
		inputChangeHandler: nameInputChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput
	} = useInput(value => value.trim() !== '');
	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailInputHasError,
		inputChangeHandler: emailInputChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput
	} = useInput(value =>
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
			value
		)
	);

	// const [enteredName, setenteredName] = useState('');
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [nameIsValid, setNameIsValid] = useState(null);
	// const [emailIsValid, setEmailIsValid] = useState(null);

	const nameInputRef = useRef();
	const emailInputRef = useRef();

	// const nameInputChangeHandler = event => {
	// 	setenteredName(event.target.value);

	// 	if (nameInputRef.current.value.trim() === '') return setNameIsValid(false);
	// 	setNameIsValid(true);
	// };
	// const nameInputBlurHandler = event => {
	// 	if (enteredName.trim() === '') return setNameIsValid(false);
	// };

	// const emailInputChangeHandler = event => {
	// 	setEnteredEmail(event.target.value);

	// 	if (isEmailValid(emailInputRef.current.value)) return setEmailIsValid(true);
	// 	setEmailIsValid(false);
	// };
	// const emailInputBlurHandler = event => {
	// 	if (!isEmailValid(event.target.value)) return setEmailIsValid(false);
	// };

	const formSubmitionHandler = event => {
		event.preventDefault();

		if (!nameIsValid || !emailIsValid) return;

		resetNameInput();
		resetEmailInput();
	};

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					ref={nameInputRef}
					className={nameInputHasError ? 'invalid' : undefined}
					type="text"
					value={enteredName}
					placeholder={`Plese, enter your name${
						nameInputHasError ? ' !!!' : '.'
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
					className={emailInputHasError ? 'invalid' : undefined}
					type="email"
					value={enteredEmail}
					placeholder={`Plese, enter your email${
						emailInputHasError ? ' !!!' : '.'
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
