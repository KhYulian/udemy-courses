import React, { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.css';

import CartContext from '../../../store/cart-contex';
import CartIcon from './CartIcon';

const HeaderCartButton = props => {
	const cartContext = useContext(CartContext);
	const { items } = cartContext;

	const numberOfCartItems = items.reduce((cur, item) => {
		return cur + item.amount;
	}, 0);
	const [btnIsAnimated, setBtnIsAnimated] = useState(false);

	const btnClasses = `${classes.button} ${btnIsAnimated && classes.bump}`;

	useEffect(() => {
		if (items.length === 0) return;
		setBtnIsAnimated(true);

		const timer = setTimeout(
			() => setBtnIsAnimated(false),

			300
		);

		return () => clearTimeout(timer);
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
