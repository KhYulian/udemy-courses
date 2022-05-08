const toolKit = require('@reduxjs/toolkit');
const { configureStore } = toolKit;

const defaultState = { counter: 0 };
// reducer function will always recieve these 2 arguments and should always return new state object.
function counterReduce(state = defaultState, dispatchedAction) {
	// this function should be the clean function (no side effects) - same input leads to the same output
	if (dispatchedAction.type === 'INCREMENT') {
		return {
			counter: state.counter + 1
		};
	}
	if (dispatchedAction.type === 'DECREMENT') {
		return {
			counter: state.counter - 1
		};
	}

	return state;
}

const store = configureStore({
	reducer: counterReduce
});

// console.log(store.getState());

function counterSubscriber() {
	const latestState = store.getState();
	console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
