import { configureStore } from '@reduxjs/toolkit';

const defaultState = {
	counter: 0
};

const counterReducer = (state = defaultState, action) => {
	if (action.type === 'increase') {
		return {
			counter: state.counter + action.value
		};
	}
	if (action.type === 'decrease') {
		return {
			counter: state.counter - action.value
		};
	}

	return state;
};

const store = configureStore({
	reducer: counterReducer
});

export default store;
