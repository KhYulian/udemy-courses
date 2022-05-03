// React is JS library for building user interfaces
// ReactDOM is your interface to the web
// !!! Whenever props state or context changes component rerenders. Component is RE-EVALUATING !!!
// Re-Evaluating Components !== Re-Rendering the DOM
// Changes to the real DOM are only made for differences between evaluations

import React, { useState, useCallback } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/demo/DemoOutput';

function App() {
	console.log(
		'Component function evaluated. - Runs every time each time state is changed. So component is revaluated every time state is changed.'
	);
	const [isToggleAllowed, setIsToggleAllowed] = useState(false);
	const [showParagraph, setshowParagraph] = useState(false);

	const togglePHandler = useCallback(() => {
		if (isToggleAllowed) {
			setshowParagraph(ps => !ps);
		}
	}, [isToggleAllowed]); // dependencies are as in useEffect
	const allowToggleHandler = useCallback(() => {
		setIsToggleAllowed(ps => !ps);
	}, []);

	return (
		<>
			<div className="app">
				<h1>Let's go.</h1>
				<Button onClick={allowToggleHandler}>Allow Toggling</Button>n
				<Button onClick={togglePHandler}>Toggle Paragraph</Button>
				<DemoOutput show={false} />
			</div>
		</>
	);
}

export default App;
