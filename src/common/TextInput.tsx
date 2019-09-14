import React, { useState } from 'react';
import { TextInputWrapper } from "./TextInput.style";

interface Props {
	type: string
	value: string
	onChange: (e: any) => void,
	placeholder?: string,
	width?: string
}

const TextInput: React.FC<Props> = ({
	type,
	value,
	onChange,
	placeholder,
	width
}: Props) => {
	const [isFocused, changeFocus] = useState(false);

	return (
		<TextInputWrapper focused={isFocused || !!value} width={width}>
			<span>{placeholder}</span>
			<input onFocus={() => changeFocus(true)} onBlur={() => changeFocus(false)} value={value} onChange={onChange} type={type}/>
		</TextInputWrapper>
	)
};

export default TextInput;