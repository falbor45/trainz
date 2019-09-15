import React, { useState, useEffect } from 'react';
import { LoadingScreenWrapper } from "./LoadingScreen.style";
import ActivityIndicator from "../../../common/ActivityIndicator";

interface Props {
	shouldClose: boolean
	closeCallback: () => void
}

const LoadingScreen: React.FC<Props> = ({
	shouldClose,
	closeCallback
}: Props) => {
	const [isClosing, changeCloseState] = useState(false);

	useEffect(() => {
		if (shouldClose) {
			changeCloseState(true);
			setTimeout(() => {
				closeCallback();
			}, 500)
		}
	}, [shouldClose, closeCallback]);
	return (
		<LoadingScreenWrapper isClosing={isClosing}>
			<div></div>
			<span>Lorem ipsum dolor sit amet?</span>
			<ActivityIndicator/>
		</LoadingScreenWrapper>
	)
};

export default LoadingScreen;