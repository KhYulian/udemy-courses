import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Cart.module.css';

const Cart = props => {
	const cartitems = (
		<ul className={classes['cart-items']}>
			{[{ id: 'c2', name: 'Sushi', amount: 2, price: 12.89 }].map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<div>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>45.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['btn--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
