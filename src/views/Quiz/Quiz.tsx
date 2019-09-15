import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QuizWrapper } from './Quiz.style';
import Question from "./quiz/Question";
import LoadingScreen from "./quiz/LoadingScreen";

const Quiz: React.FC<any> = ({
	currentQuestion,
	getInitialQuestion,
	incrementPoints
}) => {
	const [isLoading, changeLoadState] = useState(true);
	const [finished, changeFinish] = useState(false);
	const [questionStart, changeQuestionStart] = useState(Date.now());

	useEffect(() => {
		getInitialQuestion()
			.finally(() => changeLoadState(false));
	}, []);

	return !isLoading ? (
		<QuizWrapper>
			{
				currentQuestion && (
					<Question
						question={currentQuestion.questionText}
						onAnswer={() => {
							incrementPoints(Math.floor(1000 - ((Date.now() - questionStart) / 10)));
							changeLoadState(!isLoading)
						}}
						answers={currentQuestion.answers}/>
				)
			}
		</QuizWrapper>
	) : (
		<LoadingScreen shouldClose={finished} closeCallback={() => {
			changeLoadState(false);
			changeFinish(false);
		}}/>
	)
};

const mapState = (state: any) => ({
	currentQuestion: state.questionsModel.currentQuestion
});

const mapDispatch = (dispatch: any) => ({
	getInitialQuestion: dispatch.questionsModel.getInitialQuestion,
	incrementPoints: dispatch.questionsModel.incrementPoints
});

export default connect(
	mapState,
	mapDispatch
)(Quiz);