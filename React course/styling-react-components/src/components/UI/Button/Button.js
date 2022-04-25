import styled from 'styled-components';

const Button = styled.button`
	width: 100%;
	font: inherit;
	padding: 0.5rem 1.5rem;
	border: 1px solid #03396c;
	color: white;
	background: #03396c;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
	cursor: pointer;

	@media (min-width: 768px) {
		width: auto;
	}

	&:focus {
		outline: none;
	}

	&:hover,
	&:active {
		background: #005b96;
		border-color: #005b96;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
	}
`;
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
