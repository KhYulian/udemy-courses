import { useSelector, useDispatch, useStore } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
	// when you use useSelector react-redux will automatically set a subscription
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {};
	const incrementHandler = value => {
		dispatch({ type: 'increase', value });
	};
	const decrementHandler = value => {
		dispatch({ type: 'decrease', value });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button type="button" onClick={decrementHandler.bind(null, 1)}>
					Decrement ( - )
				</button>
				<button type="button" onClick={incrementHandler.bind(null, 1)}>
					Increment ( + )
				</button>
				<button type="button" onClick={incrementHandler.bind(null, 5)}>
					Increace by 5
				</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
