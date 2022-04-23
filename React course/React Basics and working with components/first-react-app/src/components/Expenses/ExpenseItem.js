// Import css to use in component
import './ExpenseItem.css';

// Import another component into this component
import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';

// Repeat the filename in the name of function

// A component in React is just a JavaScript function
function ExpenseItem(props) {
	// we will get one parameter in any component we use. It will be an object which holds all recieved attribues as properties(props)
	function clickHandler() {
		// Name function like this if they triggered with event.
		console.log('Clicked!');
	}
	// return jsx code
	return (
		// Wrap HTML code into parentheses
		// We can return only one root element
		<Card className="expense-item">
			{/* you can run basic JavaScript expressions inside curly braces */}
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}$</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

// Export component
export default ExpenseItem;
