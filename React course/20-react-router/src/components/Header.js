import classes from './Header.module.css';

export default function Header() {
	return (
		<nav className={classes.nav}>
			<ul className={classes['nav__list']}>
				<li className={classes['nav__item']}>
					<a href="/home" className={classes['nav__link']}>
						Home
					</a>
				</li>
				<li className={classes['nav__item']}>
					<a href="/products" className={classes['nav__link']}>
						Products
					</a>
				</li>
			</ul>
		</nav>
	);
}
