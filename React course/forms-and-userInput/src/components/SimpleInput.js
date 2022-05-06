import { useState, useRef } from 'react';

const SimpleInput = props => {
	const [enteredName, setenteredName] = useState('');
	const [error, setError] = useState(null);
	const nameInputRef = useRef();

	const nameInputChangeHandler = event => {
		setenteredName(event.target.value);
		setError(null);
	};

	const formSubmitionHandler = event => {
		event.preventDefault();
		// Chech if user entered value.
		if (enteredName.trim() === '') return setError('Please, enter your name.');

		// nameInputRef.current.value = '' ===> Don't manipulate the DOM
		setenteredName('');
		setError(null);
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
					type="text"
					id="name"
					ref={nameInputRef}
					value={enteredName}
					placeholder={`Plese, enter your name${error ? ' !!!' : '.'}`}
					className={error && 'invalid'}
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
