import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);

	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);

		setShowForm(ps => !ps);
	}

	function toggleShowExpenseForm() {
		setShowForm(ps => !ps);
	}

	return (
		<div className="new-expense">
			{!showForm && (
				<button
					onClick={toggleShowExpenseForm}
					className="new-expense__show-expense-form"
				>
					Add New Expense
				</button>
			)}
			{showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
		</div>
	);
}

export default NewExpense;
