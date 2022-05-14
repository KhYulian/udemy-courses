import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 6.22,
		name: 'My first book',
		description: 'First book i ever wrote'
	},
	{
		id: 'p2',
		price: 7.67,
		name: 'My second book',
		description: 'Second book I wrote. Now it costs more.'
	}
];

const Products = props => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(el => {
					return (
						<ProductItem
							id={el.id}
							title={el.name}
							price={el.price}
							description={el.description}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
