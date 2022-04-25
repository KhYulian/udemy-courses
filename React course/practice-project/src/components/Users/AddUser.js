import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

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
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
}

export default AddUser;
