import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<Fragment>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
		</Fragment>
	);
}

export default App;

// our-domain.com/ ==> Component A
// our-domain.com/products ==> Component B
