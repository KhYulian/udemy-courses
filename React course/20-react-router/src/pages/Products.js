import { Link } from 'react-router-dom';

export default function Products() {
	return (
		<>
			<h1>The Products Page</h1>

			<ul>
				<Link to="/products/1">Product 1</Link>
				<Link>Product 2</Link>
				<Link>Product 3</Link>
			</ul>
		</>
	);
}
