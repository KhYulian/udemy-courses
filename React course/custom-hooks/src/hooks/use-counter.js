import React, { useState, useEffect } from 'react';

// !!! function name must start wiht use !!!
const useCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
};

export default useCounter;
