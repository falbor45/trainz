import styled from 'styled-components';


export const TextInputWrapper = styled.div`
	position: relative;
	widtht:70%;
	padding:5px
	margin-bottom: 8px;
	& > input {
		background: none;
		border: none;
		color: ${props => props.theme.lightGray};
		font-size: 20px;
		padding: 0 4px 4px;
		outline: 0;
		&::placeholder {
			color: ${props => props.theme.lightGray};
			opacity: 0.9;
		}
	}
	&:after {
		content: '';
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	height: 0;
  	width: 100%;
  	border-bottom: 1px solid #000000;
		border-image: linear-gradient(to right, ${props => props.theme.ligthblue}, ${props => props.theme.white});
		border-image-slice: 1;
  	opacity: 0.2;
	}
`;