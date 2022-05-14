import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
	return (
		<nav className={classes.nav}>
			<ul className={classes['nav__list']}>
				<li className={classes['nav__item']}>
					<Link to="/home" className={classes['nav__link']}>
						Home
					</Link>
				</li>
				<li className={classes['nav__item']}>
					<Link to="/products" className={classes['nav__link']}>
						Products
					</Link>
				</li>
				<li className={classes['nav__item']}>
					<Link to="/about" className={classes['nav__link']}>
						About
					</Link>
				</li>
				<li className={classes['nav__item']}>
					<Link to="/contacts" className={classes['nav__link']}>
						Contacts
					</Link>
				</li>
			</ul>
		</nav>
	);
}
