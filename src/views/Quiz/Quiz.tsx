import React from 'react';
import { QuizWrapper } from './Quiz.style';
import Question from "./quiz/Question";
const Quiz: React.FC = ({

}) => {
	return (
		<QuizWrapper>
			<Question
				question="Who is the best duud?"
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
	)
};

export default Quiz;