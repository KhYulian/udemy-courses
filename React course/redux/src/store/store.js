import { configureStore } from '@reduxjs/toolkit';

const defaultState = {
	counter: 0,
	showCounter: false
};

const counterReducer = (state = defaultState, action) => {
	if (action.type === 'increase') {
		return {
			...state,
			counter: state.counter + action.value
		};
	}
	if (action.type === 'decrease') {
		return {
			...state,
			counter: state.counter - action.value
		};
	}
	
	if (action.type === 'toggleCounter') {
		return {
			...state,
			showCounter: !state.showCounter
		};
	}
	return state;
};

const store = configureStore({
	reducer: counterReducer
});

export default store;
