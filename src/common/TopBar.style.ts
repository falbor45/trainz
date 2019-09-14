import styled from 'styled-components';

export const TopBarWrapper = styled.div`
	height: calc(10vh + 3px);
	min-height: 64px;
	width: 100vw;
	position: relative;
	background: ${props => props.theme.primary};
	& > img {
		position: absolute;
		height: 5vh;
		top: 50%;
		transform: translateY(-50%);
		left: 8px;
	}
	& > img:last-child {
		left: initial;
		right: 8px;
	}
	&:after {
		content: '';
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	height: 1px;
  	width: 100%;
  	border-bottom: 3px solid #000000;
		border-image: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.primary});
		border-image-slice: 1;
  	opacity: 0.4;
	}
`;