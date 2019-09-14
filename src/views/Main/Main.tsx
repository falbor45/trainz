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
		if (!nickname || ticket.length !== 11) {
			return;
		}

		history.push('/game');
	};

	const validateNickname = (nickname: string) => nickname.length <= 12;

	const validateTicket = (ticket: string) => ticket.length <= 11;

	return (
		<MainWrapper>
			<TextInput width="70%" value={nickname} onChange={e => validateNickname(e.target.value) && changeNickname(e.target.value)} type="text" placeholder="Nickname"/>
			<TextInput width="70%" value={ticket} onChange={e => validateTicket(e.target.value) && changeTicket(e.target.value.toUpperCase())} type="text" placeholder="Ticket ID"/>
			<Button padding="10px 0" width="70%" label="PLAY" onClick={goToGame}/>
		</MainWrapper>
	)
};

export default Main;