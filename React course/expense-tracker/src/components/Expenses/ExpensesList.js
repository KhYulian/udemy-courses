import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	if (props.expenses.length === 0) return <h3>No expenses found</h3>;

	if (props.expenses.length > 0) {
		return props.expenses.map(item => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}
}
export default ExpensesList;
