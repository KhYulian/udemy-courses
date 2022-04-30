import React, { useContext } from 'react';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';

const Cart = props => {
	const cartContext = useContext(CartContext);

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;
	const removeCardItemHandler = id => {

	};
	const addCartItemHandler = item => {
		
	};

	const cartitems = (
		<ul className={classes['cart-items']}>
			{cartContext.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={removeCardItemHandler.bind(null, item.id)}
					onAdd={addCartItemHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['btn--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
