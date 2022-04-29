import React from 'react';
import Modal from '../UI/Modal';

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
		<Modal onClose={props.onClose}>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>45.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['btn--alt']} onClick={props.onClose}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
