import { useState } from 'react';

import './App.css';
// Each component should be in a separate file which we import into App.js
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';

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

function App() {
	const [enteredExpenses, setEnteredExpenses] = useState(expenses);

	function addExpenseHandler(expense) {
		setEnteredExpenses(ps => [expense.expenseData, ...ps]);
	}

	// React uses declarative approach
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			{/* We use components as HTML elements */}
			<ExpenseItems expenses={enteredExpenses} />
		</div>
	);
}

export default App;
