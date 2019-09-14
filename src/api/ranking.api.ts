import Api, { MOCK_fakeFetch } from './Api';

export const getGlobalRankingR = () => MOCK_fakeFetch({
	data: {
		leaderboard: [
			{
				id: 1,
				username: 'PussyHunter15',
				points: 987560,
				position: 1
			},
			{
				id: 2,
				username: 'DogFighta',
				points: 78329,
				position: 2

			},
			{
				id: 3,
				username: 'exxTended',
				points: 2199,
				position: 3

			}
		],
		me: {
			id: 98,
			username: 'ME user',
			points: 1,
			position: 13
		}
	}
});