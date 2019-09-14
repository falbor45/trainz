import styled from 'styled-components';

interface TextInputWrapperProps {
	width?: string
	focused: boolean
}

export const TextInputWrapper = styled.div<TextInputWrapperProps>`
	position: relative;
	width: ${props => props.width || 'auto'};
	padding: 5px
	margin-bottom: 8px;
	& > span {
		position: absolute;
		top: ${props => props.focused ? '0' : '50%'};
		transform: translateY(${props => props.focused ? '0' : '-50%'}) translateX(${props => props.focused ? '0' : '-50%'}) ${props => props.focused && 'scale(0.75)'};
		left: ${props => props.focused ? '0' : '50%'};
		margin: 0 auto;
		transition: .25s;
		pointer-events: none;
	}
	& > input {
		width: 100%;
		background: none;
		border: none;
		color: ${props => props.theme.lightGray};
		font-size: 20px;
		padding: 12px 4px 4px;
		outline: 0;
		font-family: inherit;
		text-align: center;
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