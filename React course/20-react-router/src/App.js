import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
			</main>
		</Fragment>
	);
}

export default App;
