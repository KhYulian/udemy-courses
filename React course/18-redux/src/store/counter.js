import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: false
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,
	reducers: {
		increase(state, action) {
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

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;