import { Link } from 'react-router-dom';

export default function Products() {
	return (
		<>
			<h1>The Products Page</h1>

			<ul>
				<Link to="/product/1">Product 1</Link>
				<Link to="/product/2">Product 2</Link>
				<Link to="/product/3">Product 3</Link>
			</ul>
		</>
	);
}
