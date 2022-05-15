import { useParams, useRouteMatch, Route, Link } from 'react-router-dom';

import HighLightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Yulian',
		quote: 'Learning React is fun!'
	},
	{
		id: 'q2',
		author: 'YulianKh',
		quote: 'Learning React is great!'
	}
];

export default function QuoteDetails() {
	const match = useRouteMatch();

	const params = useParams();
	const quote = DUMMY_QUOTES.find(el => el.id === params.quoteId);

	console.log(match);

	if (!quote) {
		return <p>No quote found</p>;
	}

	return (
		<>
			<HighLightedQuote text={quote.quote} author={quote.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div> 
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
}
