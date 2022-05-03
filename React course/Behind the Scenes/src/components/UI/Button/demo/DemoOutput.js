import React from 'react';

const DemoOutput = props => {
	// change in parent also make component re-evaluate
	// but re-evaluating component function is not the same as re-rendering real DOM.
	// If parent function re-executed child components function will also be re-executed.
	console.log(
		'DemoOutput running. Props changed so component re-evaluated as well.'
	);
	return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput); // memo tells react to look to props this component has and compare to previous props. And only if props change component will be re-evaluated.
