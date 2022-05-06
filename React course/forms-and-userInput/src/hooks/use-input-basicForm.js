import { useState } from 'react';

const useInputBasicForm = validateInput => {
	const [enteredValue, setenteredValue] = useState('');
	const [isTouched, setisTouched] = useState(false);

	const valueIsValid = validateInput(enteredValue);
	const hasError = isTouched && !valueIsValid;

	const inputChangeHandler = event => {
		setenteredValue(event.target.value);
	};
	const inputBlurHandler = event => {
		setisTouched(true);
	};

	const reset = () => {
		setenteredValue('');
		isTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		inputChangeHandler,
		inputBlurHandler,
		reset
	};
};

export default useInputBasicForm;
