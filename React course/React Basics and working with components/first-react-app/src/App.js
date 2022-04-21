// Each component should be in a separate file which we import into App.js
import ExpenseItems from './components/Expenses/ExpenseItems';

// function createDate() {
// 	return new Date().toDateString().split(' ').slice(1).join(' ');
// }

function App() {
	const expenses = [
		{
			title: 'Car insuranse',
			amount: 345.52,
			date: new Date()
		},
		{
			title: 'Food',
			amount: 552.67,
			date: new Date()
		},
		{
			title: 'Rent',
			amount: 2672.34,
			date: new Date()
		},
		{
			title: 'New Computer',
			amount: 1120.99,
			date: new Date()
		}
	];
	// React uses declarative approach
	return (
		<div className="App">
			<header className="App-header">Let's get started</header>
			{/* We use components as HTML elements */}
			<ExpenseItems expenses={expenses} />
		</div>
	);
}

export default App;
