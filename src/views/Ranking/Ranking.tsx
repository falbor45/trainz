import React, { useEffect } from 'react';
import { RankingWrapper, Leaderboard } from './Ranking.style';
import { connect } from 'react-redux';
import {firstPlaceIcon, secondPlaceIcon, shieldIcon, thirdPlaceIcon} from "../../assets";
import ActivityIndicator from '../../common/ActivityIndicator';

interface Props {
	getGlobalRanking: any,
	leaderboard: any,
	myPosition: any
}

const Ranking: React.FC<Props> = ({
	getGlobalRanking,
	leaderboard,
	myPosition
}: Props) => {
	useEffect(() => {
		getGlobalRanking();
	}, [getGlobalRanking]);

	return (
		<RankingWrapper>
			{
				leaderboard.length ? (
					<Leaderboard>
						{
							leaderboard.map((position: any) => (
								<div key={position.id}>
									<div>
										<span>{position.username} </span>
										<span>{position.points} Pts</span>
									</div>
									<img src={[firstPlaceIcon, secondPlaceIcon, thirdPlaceIcon][position.position - 1]} alt=""/>
								</div>
							))
						}
						{
							myPosition && (
								<div>
									<div>
										<span>{myPosition.username}</span>
										<span>{myPosition.points} Pts</span>
									</div>
									<img src={shieldIcon} alt=""/>
									<span>{myPosition.position}</span>
								</div>
							)
						}
					</Leaderboard>
				) : <ActivityIndicator/>
			}
		</RankingWrapper>
	)
};

const mapState = (state: any) => ({
	leaderboard: state.rankingModel.leaderboard,
	myPosition: state.rankingModel.me
});

const mapDispatch = (dispatch: any) => ({
	getGlobalRanking: dispatch.rankingModel.getGlobalRanking
});

export default connect(
	mapState,
	mapDispatch
)(Ranking);