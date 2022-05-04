import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setmovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, seterror] = useState(null);

	const fetchMoviesHandler = async () => {
		try {
			setIsLoading(true);
			seterror(null);
			const response = await fetch('https://swapi.dev/api/films/', {
				method: 'GET'
			});

			if (!response.ok) throw new Error('Something went wrong');

			const data = await response.json();

			const transformedMovies = data.results.map(el => {
				return {
					id: el.episode_id,
					title: el.title,
					openingText: el.opening_crawl,
					releaseDate: el.release_date
				};
			});
			setmovies(transformedMovies);
		} catch (error) {
			seterror(error.message);
		}
		setIsLoading(false);
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
				{isLoading && <p>Loading...</p>}
				{!isLoading && error && <p>{error}</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
