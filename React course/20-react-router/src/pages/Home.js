import { Route } from 'react-router-dom';

export default function Home() {
	return (
		<section>
			<h1>The Home Page</h1>
			<Route path="/home/new-user">
				<h1>Welcome, new user</h1>
			</Route>
		</section>
	);
}
