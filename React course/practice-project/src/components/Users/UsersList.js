import React from 'react';

import classes from './UsersList.module.css';

import Card from '../UI/Card';

function UsersList(props) {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map(user => (
					<li key={Math.random()}>
						{user.username} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
}

export default UsersList;
