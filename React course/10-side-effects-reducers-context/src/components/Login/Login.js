import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/authContex';
import Input from '../UI/input/Input';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.value, isValid: action.value.length > 6 };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.length > 6 };
	}

	return { value: '', isValid: false };
};

const Login = props => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null
	});

	const authContext = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const { isValid: isEmailValid } = emailState;
	const { isValid: isPasswordValid } = passwordState;

	useEffect(() => {
		const timer = setTimeout(() => {
			setFormIsValid(isEmailValid && isPasswordValid);
			console.log('checking form validity');
		}, 500);
		return () => {
			clearTimeout(timer);
			console.log('Cleanup runs');
		}; // cleanup function
	}, [isEmailValid, isPasswordValid]);

	useEffect(() => {
		console.log('Effect running');
		return () => {
			console.log('Effect cleanup');
		};
	}, [passwordState.value]);

	const emailChangeHandler = event => {
		dispatchEmail({
			type: 'USER_INPUT',
			val: event.target.value
		});

		// setFormIsValid(
		// 	event.target.value.includes('@') && enteredPassword.trim().length > 6
		// );
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: 'USER_INPUT', value: event.target.value });

		// setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
		// setFormIsValid(
		// 	event.target.value.trim().length > 6 && emailState.includes('@')
		// );
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = event => {
		event.preventDefault();
		if (formIsValid) {
			authContext.onLogin(emailState.value, passwordState.value);
		} else if (!isEmailValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					label="Email"
					isValid={isEmailValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id="password"
					label="Password"
					isValid={isPasswordValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
