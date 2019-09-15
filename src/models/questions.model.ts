import {getInitialQuestionR} from "../api/questions.api";

const questionsModel = {
	state: {
		currentQuestion: null,
		accPoints: 0
	},
	reducers: {
		incrementPoints(state: any, payload: number) {
			return {
				...state,
				accPoints: payload < 0 ? state.accPoints : state.accPoints + payload
			}
		},
		onGetInitialQuestion(state: any, payload: any) {
			return {
				...state,
				currentQuestion: payload
			}
		}
	},
	effects: {
		async getInitialQuestion() {
			const data = await getInitialQuestionR();

			// @ts-ignore
			this.onGetInitialQuestion(data.data);
		}
	}
};

export default questionsModel;