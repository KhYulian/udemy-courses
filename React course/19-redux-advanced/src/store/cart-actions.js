import { uiActions } from './ui-slice';
import cart, { cartActions } from './cart';

export const fetchCartData = () => {
	return async dispatch => {
		const fetchData = async () => {
			const response = await fetch(
				'https://redux-advanced-5cc8f-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'GET',
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': '*'
					}
				}
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}

			return await response.json();
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity
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
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity
					}),
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
