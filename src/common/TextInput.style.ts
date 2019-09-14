import styled from 'styled-components';


export const TextInputWrapper = styled.div`
	position: relative;
	margin-bottom: 8px;
	& > input {
		background: none;
		border: none;
		color: ${props => props.theme.tertiary};
		font-size: 20px;
		padding: 0 4px 4px;
		outline: 0;
		&::placeholder {
			color: ${props => props.theme.tertiary};
			opacity: 0.9;
		}
	}
	&:after {
		content: '';
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	height: 1px;
  	width: 100%;
  	border-bottom: 4px solid #000000;
		border-image: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.primary});
		border-image-slice: 1;
  	opacity: 0.2;
	}
`;