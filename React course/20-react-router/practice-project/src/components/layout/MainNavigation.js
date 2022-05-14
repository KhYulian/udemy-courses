import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to="/quotes" activeClassName={classes.active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to=""></NavLink>
					</li>
					<li>
						<NavLink to=""></NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
