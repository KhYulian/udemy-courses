import React, { useReducer } from 'react';

import CartContext from './cart-contex';

const defaultCartState = {
	items: [],
	totalAmount: 0
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		// const updatedItems = state.items.concat(action.item);

		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItems;
		let newTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: newTotalAmount
		};
	}

	if (action.type === 'REMOVE_ITEM') {
		let updatedItems;
		let newTotalAmount;
		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.itemID
		);
		const existingCartItem = state.items[existingCartItemIndex];

		newTotalAmount = state.totalAmount - existingCartItem.price;
		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.itemID);
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: newTotalAmount
		};
	}

	return defaultCartState; //return new state snapshot
};

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD_ITEM', item: item });
	};

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE_ITEM', itemID: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
