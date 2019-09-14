import React from 'react';
import { TopBarWrapper } from "./TopBar.style";
import {backIcon, brandLogo} from '../assets';
import { History } from "history";
import {withRouter} from "react-router";

interface Props {
	history: History,
}

interface dicI {
	[key: string]: string
}

const dic: dicI = {
	'/game': '/'
};

const TopBar: React.FC<Props> = ({
	history
}: Props) => {

	const redirect = (path: string) => {
		if (path === '/') {
			window.location.replace("https://www.intercity.pl/pl/");
			return;
		}
		history.push(dic[path]);
	};
	return (
		<TopBarWrapper>
			<img src={brandLogo} alt=""/>
			<img src={backIcon} alt="" onClick={() => redirect(history.location.pathname)}/>
		</TopBarWrapper>
	)
};

export default withRouter(TopBar);