import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
	// when you use useSelector react-redux will automatically set a subscription
	const counter = useSelector(state => state.counter.counter);
	const showCounter = useSelector(state => state.counter.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const incrementHandler = value => {
		dispatch(counterActions.increase({ value })); // { type: 'unique identifier', payload: value }
	};
	const decrementHandler = value => {
		dispatch(counterActions.decrease({ value }));
	};

	const counterContent = (
		<React.Fragment>
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
		</React.Fragment>
	);

	return (
		<main className={classes.counter}>
			{showCounter && counterContent}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
