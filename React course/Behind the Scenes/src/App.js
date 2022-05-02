// React is JS library for building user interfaces
// ReactDOM is your interface to the web
// !!! Whenever props state or context changes component rerenders. Component is RE-EVALUATING !!!
// Re-Evaluating Components !== Re-Rendering the DOM
// Changes to the real DOM are only made for differences between evaluations

import React, { useState } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';

function App() {
	console.log(
		'Component function evaluated. - Runs every time each time state is changed. So component is revaluated every time state is changed.'
	);
	const [showP, setshowP] = useState(false);

	const togglePHandler = () => {
		setshowP(ps => !ps);
	};

	return (
		<>
			<div className="app">
				<h1>Let's go.</h1>
				<Button onClick={togglePHandler}>Toggle</Button>
				{showP && <p>This is hidden p</p>}
			</div>
		</>
	);
}

export default App;
