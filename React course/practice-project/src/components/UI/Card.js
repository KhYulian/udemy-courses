import styles from './Card.module.css';

function Card(props) {
	console.log(styles);
	return (
		<div className={`${styles.card} ${props.className}`}>{props.children}</div>
	);
}

export default Card;
