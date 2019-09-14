import React from 'react';
import {ButtonWrapper} from './Button.style';

interface Props {
	label: string,
	onClick: () => void,
	margin?: string
}

const Button: React.FC<Props> = ({
	label,
	onClick,
	margin
}: Props) => {
	return (
		<ButtonWrapper onClick={onClick} margin={margin}>
			{label}
		</ButtonWrapper>
	)
};

export default Button;