import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
	return (
		<nav className={classes.nav}>
			<ul className={classes['nav__list']}>
				<li className={classes['nav__item']}>
					<NavLink
						to="/home"
						className={classes['nav__link']}
						activeClassName={classes.active}
					>
						Home
					</NavLink>
				</li>
				<li className={classes['nav__item']}>
					<NavLink
						to="/products"
						className={classes['nav__link']}
						activeClassName={classes.active}
					>
						Products
					</NavLink>
				</li>
				<li className={classes['nav__item']}>
					<NavLink
						to="/about"
						className={classes['nav__link']}
						activeClassName={classes.active}
					>
						About
					</NavLink>
				</li>
				<li className={classes['nav__item']}>
					<NavLink
						to="/contacts"
						className={classes['nav__link']}
						activeClassName={classes.active}
					>
						Contacts
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
