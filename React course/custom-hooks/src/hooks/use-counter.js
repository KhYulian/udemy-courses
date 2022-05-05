import  { useState, useEffect } from 'react';

// !!! function name must start wiht use !!!
const useCounter = (step) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prevCounter => prevCounter + step);
		}, 1000);

		return () => clearInterval(interval);
	}, [step]);

    return counter;
};

export default useCounter;
