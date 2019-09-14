import React from 'react';
import { QuestionWrapper } from './Question.style';

interface answer {
	text: string
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
						<div onClick={onAnswer}>
							<span>{answer.text}</span>
						</div>
					))
				}
			</div>
		</QuestionWrapper>
	)
};

export default Question;