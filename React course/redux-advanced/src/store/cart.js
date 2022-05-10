import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = {
	items: [],
	totalQuantity: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					title: newItem.title
				}); // dont mutate in regular redux
			} else {
				// Item does exist - update existing item
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);
			state.totalQuantity--;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		}
	}
});

export const sentCartData = cart => {
	return async dispatch => {
		dispatch(
			uiActions.setNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data...'
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://redux-advanced-5cc8f-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': '*'
					}
				}
			);

			if (!response.ok) throw new Error('Sending cart data failed!');
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.setNotification({
					status: 'success',
					title: 'Success!',
					message: 'Data successfully sent!'
				})
			);
		} catch (error) {
			dispatch(
				uiActions.setNotification({
					status: 'error',
					title: 'Error!',
					message: error.message
				})
			);
		}
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
