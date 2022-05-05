import { getElementError } from '@testing-library/react';
import { useState, useRef } from 'react';

const SimpleInput = props => {
	const [enteredName, setenteredName] = useState('');
	const nameInputRef = useRef();

	const nameInputChangeHandler = event => {
		setenteredName(event.target.value);
	};

	const formSubmitionHandler = event => {
		event.preventDefault();
		if (enteredName.trim().length < 1) return;

		// nameInputRef.current.value = '' ===> Don't manipulate the DOM
		setenteredName('');
	};

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					type="text"
					id="name"
					ref={nameInputRef}
					value={enteredName}
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
