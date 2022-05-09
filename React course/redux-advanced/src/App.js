import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
	const cart = useSelector(state => state.cart);
	const showCart = useSelector(state => state.ui.cartIsVisible);

	useEffect(() => {
		fetch(
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
	}, [cart]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
