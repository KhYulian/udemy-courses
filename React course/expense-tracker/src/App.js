// Each component should be in a separate file which we import into App.js
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';

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

	function addExpenseHandler(expenses) {
		console.log('In App.js');
		console.log(expenses);
	}

	// React uses declarative approach
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			{/* We use components as HTML elements */}
			<ExpenseItems expenses={expenses} />
		</div>
	);
}

export default App;
