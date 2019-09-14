import React, { useState } from 'react';
import { MainWrapper } from './Main.style';
import TextInput from '../../common/TextInput';
import Button from "../../common/Button";
import { History } from "history";

interface Props {
	history: History
}

const Main: React.FC<Props> = ({
	history
}: Props) => {
	const [nickname, changeNickname] = useState('');
	const [ticket, changeTicket] = useState('');

	const goToGame = () => {
		// if (!nickname || ticket.length !== 10) {
		// 	return;
		// }

		history.push('/game');
	};

	return (
		<MainWrapper>
			<TextInput value={nickname} onChange={e => changeNickname(e.target.value)} type="text" placeholder="Nickname"/>
			<TextInput value={ticket} onChange={e => changeTicket(e.target.value.toUpperCase())} type="text" placeholder="Ticket ID"/>
			<Button label="->" onClick={goToGame}/>
		</MainWrapper>
	)
};

export default Main;