import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sentCartData } from './store/cart';

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
		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sentCartData(cart));
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
