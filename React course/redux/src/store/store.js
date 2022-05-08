import { configureStore } from '@reduxjs/toolkit';

const defaultState = {
	counter: 0
};

const counterReducer = (state = defaultState, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1
		};
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1
		};
	}

	return state;
};

const store = configureStore({
	reducer: counterReducer
});

export default store;
