import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Yulian',
		text: 'Learning React is fun!'
	},
	{
		id: 'q2',
		author: 'YulianKh',
		text: 'Learning React is great!'
	}
];

export default function Quotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}
