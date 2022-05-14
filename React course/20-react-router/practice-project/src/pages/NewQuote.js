import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

export default function NewQuote() {
	const history = useHistory();

	const addQuoteHandler = quoteData => {
		history.push('/quotes');
		console.log(quoteData);
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
}
