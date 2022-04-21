// Import css to use in component
import './ExpenseItem.css';

// Repeat the filename in the name of function

// A component in React is just a JavaScript function
function ExpenseItem() {
	const expenseDate = new Date().toDateString().split(' ').slice(1).join(' ');
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 345.56;
	// return jsx code
	return (
		// Wrap HTML code into parentheses
		// We can return only one root element
		<div className="expense-item">
			{/* you can run basic JavaScript expressions inside curly braces */}
			<div> {expenseDate} </div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">{expenseAmount}$</div>
			</div>
		</div>
	);
}

// Export component
export default ExpenseItem;
