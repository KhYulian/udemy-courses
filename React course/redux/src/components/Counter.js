import { useSelector, useDispatch, useStore } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
	// when you use useSelector react-redux will automatically set a subscription
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {};
	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};
	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button type="button" onClick={decrementHandler}>
					Decrement ( - )
				</button>
				<button type="button" onClick={incrementHandler}>
					Increment ( + )
				</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
