import React from 'react';
import { GameWrapper } from './Game.style';
import Button from "../../common/Button";

const Game = () => {
	return (
		<GameWrapper>
			<Button padding="15px 5px" margin="24px 0" width="70%" label="? ? ? ?" onClick={() => {}}/>
			<Button padding="15px 5px" margin="24px 0" width="70%" label="Quiz" onClick={() => {}}/>
			<Button padding="15px 5px" margin="24px 0" width="70%" label="Pattern matching" onClick={() => {}}/>
		</GameWrapper>
	)
};

export default Game;
