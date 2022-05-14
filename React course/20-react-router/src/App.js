import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ProductDetail from './pages/ProductDetails';

function App() {
	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/products/:id">
						<ProductDetail />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
