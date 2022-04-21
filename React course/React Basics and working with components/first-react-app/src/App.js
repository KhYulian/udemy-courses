// Each component should be in a separate file which we import into App.js
import ExpenseItem from './components/ExpenseItem';

function App() {
	// React uses declarative approach
	return (
		<div className="App">
			<header className="App-header">Let's get started</header>
			{/* We use components as HTML elements */}
			<ExpenseItem></ExpenseItem>
		</div>
	);
}

export default App;
