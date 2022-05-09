import { configureStore, createSlice, createReducer } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
	showCounter: false
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase(state, action) {
			// we can mutate state because it will automatically clone existing state and create new state object and overwrite state we are editing in immutable way.
			state.counter = state.counter + action.payload.value;
		},
		decrease(state, action) {
			state.counter = state.counter - action.payload.value;
		},
		toggleCounter(state, action) {
			state.showCounter = !state.showCounter;
		}
	}
});

// counterSlice.actions.increase(); // returns an action object of this shape: { type: 'some-auto-generated unique identifier' }

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increase') {
// 		// state.counter++
// 		// return state; - NEVER mutate existing state

// 		return {
// 			...state,
// 			counter: state.counter + action.value
// 		};
// 	}
// 	if (action.type === 'decrease') {
// 		return {
// 			...state,
// 			counter: state.counter - action.value
// 		};
// 	}

// 	if (action.type === 'toggleCounter') {
// 		return {
// 			...state,
// 			showCounter: !state.showCounter
// 		};
// 	}
// 	return state;
// };

const store = configureStore({
	reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
