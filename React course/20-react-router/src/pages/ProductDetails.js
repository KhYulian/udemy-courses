import { useParams } from 'react-router-dom';

export default function ProductDetail() {
	const params = useParams();

	return (
		<section>
			<h1>Product Details</h1>
			<p>{params.id}</p>
		</section>
	);
}
