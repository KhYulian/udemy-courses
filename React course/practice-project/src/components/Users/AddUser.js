import styles from './AddUser.module.css';

function AddUser(props) {
	function submitHandler(ev) {
		ev.preventDefault();
	}

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="username">User Name: </label>
			<input type="text" required id="username" />
			<label htmlFor="age">Years: </label>
			<input type="number" required id="age" />
			<button type="submit">Add User</button>
		</form>
	);
}

export default AddUser;
