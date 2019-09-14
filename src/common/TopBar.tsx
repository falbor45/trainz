import React from 'react';
import { TopBarWrapper } from "./TopBar.style";
import {backIcon, brandLogo} from '../assets';


const TopBar = () => {
	return (
		<TopBarWrapper>
			<img src={brandLogo} alt=""/>
			<img src={backIcon} alt=""/>
		</TopBarWrapper>
	)
};

export default TopBar;