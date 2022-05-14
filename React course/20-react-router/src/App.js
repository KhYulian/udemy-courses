import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ProductDetail from './pages/ProductDetail';

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
				<Route path="/product/:id">
					<ProductDetail />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contacts">
					<Contacts />
				</Route>
			</main>
		</Fragment>
	);
}

export default App;
