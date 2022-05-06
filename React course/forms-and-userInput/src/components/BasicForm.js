import { useRef } from 'react';
import useInputBasicForm from '../hooks/use-input-basicForm';

import classes from './BasicForm.module.css';

const BasicForm = props => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();

	const {
		value: enteredFirstName,
		hasError: firstNameHasError,
		isValid: firstNameIsValid,
		inputChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset
	} = useInputBasicForm(value => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		inputChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset
	} = useInputBasicForm(value => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset
	} = useInputBasicForm(value =>
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
			value
		)
	);

	const formSubmitionHandler = event => {
		event.preventDefault();

		if (!firstNameIsValid) return firstNameRef.current.focus();
		if (!lastNameIsValid) return lastNameRef.current.focus();
		if (!emailIsValid) return emailRef.current.focus();

		firstNameReset();
		lastNameReset();
		emailReset();
	};

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className="control-group">
				<div className="form-control">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						value={enteredFirstName}
						className={firstNameHasError ? classes.invalid : undefined}
						id="firstName"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						ref={firstNameRef}
					/>
					{firstNameHasError && (
						<p className={classes.error}>Please, enter your first name.</p>
					)}
				</div>
				<div className="form-control">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						value={enteredLastName}
						className={lastNameHasError ? classes.invalid : undefined}
						id="lastName"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						ref={lastNameRef}
					/>
					{lastNameHasError && (
						<p className={classes.error}>Please, enter your last name.</p>
					)}
				</div>
			</div>
			<div className="form-control">
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="text"
					value={enteredEmail}
					className={emailHasError ? classes.invalid : undefined}
					id="email"
					ref={emailRef}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && (
					<p className={classes.error}>Please, enter your email.</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
