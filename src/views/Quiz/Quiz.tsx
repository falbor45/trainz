import React, { useState, useEffect } from 'react';
import { QuizWrapper } from './Quiz.style';
import Question from "./quiz/Question";
import LoadingScreen from "./quiz/LoadingScreen";

const Quiz: React.FC = () => {
	const [isLoading, changeLoadState] = useState(false);
	const [finished, changeFinish] = useState(false);

	useEffect(() => {
		let timeout: any;
		if (isLoading) {
			timeout = setTimeout(() => {
				changeFinish(true);
			}, 5000 + (Math.floor(Math.random() * 5000)));
		}
		return () => clearTimeout(timeout);
	}, [isLoading]);

	return !isLoading ? (
		<QuizWrapper>
			<Question
				question="Who is the best duud?"
				onAnswer={() => changeLoadState(!isLoading)}
				answers={[
					{
						id: 1,
						text: 'Me',
						questionId: 1
					},
					{
						id: 2,
						text: 'You',
						questionId: 1
					},
					{
						id: 3,
						text: 'Trivago',
						questionId: 1
					},
					{
						id: 4,
						text: 'John Wick',
						questionId: 1
					},
				]}/>
		</QuizWrapper>
	) : (
		<LoadingScreen shouldClose={finished} closeCallback={() => {
			changeLoadState(false);
			changeFinish(false);
		}}/>
	)
};

export default Quiz;