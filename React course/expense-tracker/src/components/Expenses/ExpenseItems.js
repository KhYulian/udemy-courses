import { useState } from 'react';

import './ExpenseItems.css';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

function ExpenseItems(props) {
	const { expenses } = props;

	const [filterYear, setFilterYear] = useState('2022');

	function filterChangeHandler(selectedYear) {
		setFilterYear(selectedYear);
	}

	const filteredExpenses = expenses.filter(expense => {
		return expense.date.getFullYear() + '' === filterYear;
	});

	let expensesContent = <h3>No expenses found</h3>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(item => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}

	return (
		<div className="expense-items">
			<ExpenseFilter
				defaultYear={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent}

			{/* <ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem> */}
		</div>
	);
}

export default ExpenseItems;
