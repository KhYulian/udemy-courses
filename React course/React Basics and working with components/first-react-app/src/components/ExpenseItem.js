// Import css to use in component
import './ExpenseItem.css';

// Repeat the filename in the name of function

// A component in React is just a JavaScript function
function ExpenseItem() {
	// return jsx code
	return (
		// Wrap HTML code into parentheses
		// We can return only one root element
		<div className="expense-item">
			<div>April 21th 2022</div>
			<div className="expense-item__description">
				<h2>Car Insurance</h2>
				<div className="expense-item__price">243.56$</div>
			</div>
		</div>
	);
}

// Export component
export default ExpenseItem;
