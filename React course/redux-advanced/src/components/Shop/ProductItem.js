import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const ProductItem = props => {
	const dispatch = useDispatch();

	const { title, price, description, id } = props;

	const productAddedToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				title,
				price,
				description
			})
		);
	};

	return (
		<li className={classes.item} key={`${id}p`}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={productAddedToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
