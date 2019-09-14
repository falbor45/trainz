import styled from 'styled-components';

interface ButtonWrapperPropsI {
	margin?: string
}

export const ButtonWrapper = styled.button<ButtonWrapperPropsI>`
	border: none;
	background: ${props => props.theme.white};
	padding: 4px 15px;
	border-radius: 2px;
	transition: .125s;
	margin: ${props => props.margin || '8px 0'}
	&:hover {
		transform: scale(1.1);
	}
`;