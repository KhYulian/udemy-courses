import { createSlice } from '@reduxjs/toolkit';

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
			if (!existingItem) {
				state.items.push({
					itemId: newItem.id,
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
		removeItemFromCart(state, action) {}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
