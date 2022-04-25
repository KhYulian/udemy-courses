import styles from './AddUser.module.css';

import Card from '../UI/Card';

function AddUser(props) {
	function submitHandler(ev) {
		ev.preventDefault();
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={submitHandler}>
				<label htmlFor="username">User Name: </label>
				<input type="text" required id="username" />
				<label htmlFor="age">Years: </label>
				<input type="number" required id="age" />
				<button type="submit">Add User</button>
			</form>
		</Card>
	);
}

export default AddUser;
