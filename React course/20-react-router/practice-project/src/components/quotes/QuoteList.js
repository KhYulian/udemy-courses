import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = props => {
	const location = useLocation();
	const history = useHistory();

	const queryParams = new URLSearchParams(location.search);
	const isSortingAscending = queryParams.get('sort');

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	function sortingHandler() {
		// history.push re-renders the page even it's a page we on.
		history.push('/quotes?sort=' + (isSortingAscending ? 'asc' : 'dsc'));
	}

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={sortingHandler}>
					Sort {isSortingAscending ? 'Ascending' : 'Descending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map(quote => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
