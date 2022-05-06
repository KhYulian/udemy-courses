import { useState, useRef } from 'react';

const SimpleInput = props => {
	const [enteredName, setenteredName] = useState('');
	const [error, setError] = useState(false);
	const nameInputRef = useRef();

	const nameInputChangeHandler = event => {
		setenteredName(event.target.value);

		if (nameInputRef.current.value.trim() === '') return setError(true);
		setError(false);
	};

	const formSubmitionHandler = event => {
		event.preventDefault();
		// Chech if user entered value.
		if (enteredName.trim() === '') return setError(true);

		// nameInputRef.current.value = '' ===> Don't manipulate the DOM
		setenteredName('');
		setError(false);
	};
	const nameInputBlurHandler = event => {
		if (enteredName.trim() === '') return setError('Please, enter your name.');
	};

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					ref={nameInputRef}
					className={error ? 'invalid' : undefined}
					type="text"
					value={enteredName}
					placeholder={`Plese, enter your name${error ? ' !!!' : '.'}`}
					id="name"
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
