import { useState, useReducer } from 'react';

const defaultInputState = {
	value: '',
	isTouched: false
};
const inputStateReduce = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === 'BLUR') {
		return { value: state.value, isTouched: true };
	}
	if (action.type === 'RESET') {
		return { value: '', isTouched: false };
	}

	return defaultInputState;
};

const useInputBasicForm = validateInput => {
	const [inputState, dispatchInput] = useReducer(
		inputStateReduce,
		defaultInputState
	);

	// const [enteredValue, setenteredValue] = useState('');
	// const [isTouched, setisTouched] = useState(false);

	const valueIsValid = validateInput(inputState.value);
	const hasError = inputState.isTouched && !valueIsValid;

	const inputChangeHandler = event => {
		dispatchInput({ type: 'INPUT', value: event.target.value });
		// setenteredValue(event.target.value);
	};
	const inputBlurHandler = event => {
		dispatchInput({ type: 'BLUR' });
		// setisTouched(true);
	};

	const reset = () => {
		dispatchInput({ type: 'RESET' });
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		inputChangeHandler,
		inputBlurHandler,
		reset
	};
};

export default useInputBasicForm;
