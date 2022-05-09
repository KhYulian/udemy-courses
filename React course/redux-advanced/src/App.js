import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const showCart = useSelector(state => state.ui.cartIsVisible);
	const notification = useSelector(state => state.ui.notification);

	useEffect(() => {
		const sentCartData = async () => {
			if (isInitial) {
				isInitial = false;
				return;
			}

			dispatch(
				uiActions.setNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data...'
				})
			);

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

			dispatch(
				uiActions.setNotification({
					status: 'success',
					title: 'Success!',
					message: 'Data successfully sent!'
				})
			);
		};

		sentCartData().catch(err => {
			dispatch(
				uiActions.setNotification({
					status: 'error',
					title: 'Error!',
					message: err.message
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
