import './ExpenseForm.css';

function ExpenseForm(props) {
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label for="title">Title</label>
					<input type="text" id="title" />
				</div>
				<div className="new-expense__control">
					<label for="amount">Amount</label>
					<input type="number" min="0.01" step="0.01" id="amount" />
				</div>
				<div className="new-expense__control">
					<label for="date">Date</label>
					<input type="date" min="2018-01-01" max="22-12-31" id="date" />
				</div>
			</div>
			
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
