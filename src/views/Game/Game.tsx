import React from 'react';
import { GameWrapper } from './Game.style';
import Button from "../../common/Button";

const Game = () => {
	return (
		<GameWrapper>
			<Button padding="10px 0" margin="24px 0" width="40vw" label="? ? ? ?" onClick={() => {}}/>
			<Button padding="10px 0" margin="24px 0" width="40vw" label="Quiz" onClick={() => {}}/>
			<Button padding="10px 0" margin="24px 0" width="40vw" label="Pattern matching" onClick={() => {}}/>
		</GameWrapper>
	)
};

export default Game;
