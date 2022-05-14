// React is JS library for building user interfaces
// ReactDOM is your interface to the web
// !!! Whenever props state or context changes component rerenders. Component is RE-EVALUATING !!!
// Re-Evaluating Components !== Re-Rendering the DOM
// Changes to the real DOM are only made for differences between evaluations

import React, { useState, useCallback, useMemo } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
import DemoList from './components/UI/Button/demo/DemoList';

function App() {
	const testArray = useMemo(() => [4, 7, 1, 23, 4], []);

	const [title, settitle] = useState('My List');

	const changeTitleHandler = () => {
		settitle('New Title');
	};
	return (
		<>
			<div className="app">
				<DemoList title={title} list={testArray} />
				<Button onClick={changeTitleHandler}>Change Title</Button>
			</div>
		</>
	);
}

export default App;
