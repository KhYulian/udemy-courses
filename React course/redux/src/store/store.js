import { configureStore, createSlice, createReducer } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: false
};
const authInitialState = {
	isLoggedIn: false
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

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		login(state) {
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
		}
	}
});

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
