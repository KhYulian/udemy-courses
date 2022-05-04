import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setmovies] = useState([]);

	const fetchMoviesHandler = () => {
		fetch('https://swapi.dev/api/films/', { method: 'GET' })
			.then(response => response.json())
			.then(data => {
				const transformedMovies = data.results.map(el => {
					return {
						id: el.episode_id,
						title: el.title,
						openingText: el.opening_crawl,
						releaseDate: el.release_date
					};
				});

				setmovies(transformedMovies);
			})
			.catch();
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
