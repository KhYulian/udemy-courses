import { useState } from 'react';

const useHTTP = (url, fetchParams, applyData) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = async taskText => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(url, fetchParams);

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();

			applyData(data);
		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	};

	return { isLoading, error, sendRequest };
};

export default useHTTP;
