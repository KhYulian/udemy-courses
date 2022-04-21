// Import css to use in component
import './ExpenseItem.css';

// Repeat the filename in the name of function

// A component in React is just a JavaScript function
function ExpenseItem(props) {
	// we will get one parameter in any component we use. It will be an object which holds all recieved attribues as properties(props)

	// return jsx code
	return (
		// Wrap HTML code into parentheses
		// We can return only one root element
		<div className="expense-item">
			{/* you can run basic JavaScript expressions inside curly braces */}
			<div> {props.date} </div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}$</div>
			</div>
		</div>
	);
}

// Export component
export default ExpenseItem;
