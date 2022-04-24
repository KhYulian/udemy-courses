import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');	

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });

	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value
		// });
		// setUserInput(previousState => {
		// 	return { ...previousState, enteredTitle: event.target.value };
		// });
	}
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value
		// });
		// setUserInput(previousState => {
		// 	return { ...previousState, enteredAmount: event.target.value };
		// });
	}
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value
		// });
		// setUserInput(previousState => {
		// 	return { ...previousState, enteredDate: event.target.value };
		// });
	}
	function submitHandler(event) {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		props.onSaveExpenseData({ expenseData });

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');		
	}

	return (
		<form onSubmit={submitHandler}>		
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						value={enteredTitle}
						onChange={titleChangeHandler}
						type="text"
						required
						id="title"
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						value={enteredAmount}
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
						required
						id="amount"
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						value={enteredDate}
						onChange={dateChangeHandler}
						type="date"
						min="2018-01-01"
						max="22-12-31"
						required
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
