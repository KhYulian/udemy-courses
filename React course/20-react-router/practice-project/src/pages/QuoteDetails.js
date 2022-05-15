import { useParams, Route, Link } from 'react-router-dom';

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
	const params = useParams();
	const quote = DUMMY_QUOTES.find(el => el.id === params.quoteId);

	if (!quote) {
		return <p>No quote found</p>;
	}

	return (
		<>
			<HighLightedQuote text={quote.quote} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
}
