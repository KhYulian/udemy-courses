import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
	}
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
	}
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
	}

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input onChange={titleChangeHandler} type="text" id="title" />
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
						id="amount"
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						onChange={dateChangeHandler}
						type="date"
						min="2018-01-01"
						max="22-12-31"
						id="date"
					/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
