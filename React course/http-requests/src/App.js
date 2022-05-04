import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setmovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchMoviesHandler = async () => {
		try {
			setIsLoading(true);
			const response = await fetch('https://swapi.dev/api/films/', {
				method: 'GET'
			});
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
			setIsLoading(false);
		} catch (error) {}
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>No movies found.</p>}
				{isLoading && <p>Loading...</p>}
				{}
			</section>
		</React.Fragment>
	);
}

export default App;
