// Each component should be in a separate file which we import into App.js
import ExpenseItem from './components/ExpenseItem';

function createDate() {
	return new Date().toDateString().split(' ').slice(1).join(' ');
}

function App() {
	const expenses = [
		{
			title: 'Car insuranse',
			amount: 345.52,
			date: createDate()
		},
		{
			title: 'Food',
			amount: 552.67,
			date: createDate()
		},
		{
			title: 'Rent',
			amount: 2672.34,
			date: createDate()
		},
		{
			title: 'New Computer',
			amount: 1120.99,
			date: createDate()
		}
	];
	// React uses declarative approach
	return (
		<div className="App">
			<header className="App-header">Let's get started</header>
			{/* We use components as HTML elements */}
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
		</div>
	);
}

export default App;
