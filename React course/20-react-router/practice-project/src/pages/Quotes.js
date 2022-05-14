import QuoteList from '../components/quotes/QuoteList';

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

export default function Quotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}
