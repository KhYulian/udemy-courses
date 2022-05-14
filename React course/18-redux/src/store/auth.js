import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
	isLoggedIn: false
};

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

export default authSlice.reducer;
export const authActions = authSlice.actions;
