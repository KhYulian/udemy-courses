import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to="/quotes" activeClassName={classes.active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to="/new-quote" activeClassName={classes.active}>
							Add a Quote
						</NavLink>
					</li>
					<li>
						<NavLink to=""></NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
