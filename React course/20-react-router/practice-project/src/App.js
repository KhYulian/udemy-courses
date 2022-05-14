import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import Quotes from './pages/Quotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';

function App() {
	return (
		<Fragment>
			<MainNavigation />

			<Switch>
				<Route path="/quotes" exact>
					<Quotes />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetails />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default App;
