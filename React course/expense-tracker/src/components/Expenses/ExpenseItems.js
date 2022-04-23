import { useState } from 'react';

import './ExpenseItems.css';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';

function ExpenseItems(props) {
	const { expenses } = props;

	const [filterYear, setFilterYear] = useState('2022');

	function filterChangeHandler(selectedYear) {
		setFilterYear(selectedYear);
	}

	const filteredExpenses = expenses.filter(expense => {
		return expense.date.getFullYear() + '' === filterYear;
	});

	return (
		<div className="expense-items">
			<ExpenseFilter
				defaultYear={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList expenses={filteredExpenses} />		
		</div>
	);
}

export default ExpenseItems;
