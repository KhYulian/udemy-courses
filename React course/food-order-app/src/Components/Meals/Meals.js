import React, { Fragment } from 'react';

import classes from './Meals.module.css';

import AvaliableMeals from './AvaliableMeals';
import MealsSummary from './MealsSummary';

const Meals = props => {
	return (
		<Fragment>
			<MealsSummary />
			<AvaliableMeals />
		</Fragment>
	);
};

export default Meals;
