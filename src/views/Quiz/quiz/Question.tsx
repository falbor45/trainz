import React from 'react';
import { QuestionWrapper } from './Question.style';

interface answer {
	answerText: string
	id: number
	questionId: number,
}

interface Props {
	question: string,
	answers: [answer, answer, answer, answer]
	onAnswer: () => void
}

const Question: React.FC<Props> = ({
	question,
	answers,
	onAnswer
}: Props) => {
	return (
		<QuestionWrapper>
			<span>{question}</span>
			<div>
				{
					answers.map(answer => (
						<div key={answer.answerText} onClick={onAnswer}>
							<span>{answer.answerText}</span>
						</div>
					))
				}
			</div>
		</QuestionWrapper>
	)
};

export default Question;