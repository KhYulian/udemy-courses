import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

export default function QuoteDetails() {
	const params = useParams();

	return (
		<>
			<h1>Quote Details</h1>
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
}
