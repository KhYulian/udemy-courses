import React, { useEffect, useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = props => {
	const { list, title } = props;
	const sortedList = useMemo(() => {
		console.log('list sorted');
		return list.sort((a, b) => a - b);
	}, [list]);

	useEffect(() => {}, []);

	return (
		<ul className={classes.list}>
			<h2>{title}</h2>
			{sortedList.map(item => (
				<li key={Math.random()}>{item}</li>
			))}
		</ul>
	);
};

export default React.memo(DemoList);
