import React from 'react';
import { TextInputWrapper } from "./TextInput.style";

interface Props {
	type: string
	value: string
	onChange: (e: any) => void,
	placeholder?: string
}

const TextInput: React.FC<Props> = ({
	type,
	value,
	onChange,
	placeholder
}: Props) => {
	return (
		<TextInputWrapper>
			<input value={value} onChange={onChange} type={type} placeholder={placeholder}/>
		</TextInputWrapper>
	)
};

export default TextInput;