import React from 'react';

const DemoInput = props => {
	return (
		<form onSubmit={props.onSubmit}>
			<label htmlFor={props.id}>{props.label}</label>
			<input type={props.type || 'text'} id={props.id}></input>
		</form>
	);
};

export default DemoInput;
