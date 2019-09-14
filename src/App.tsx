import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main/Main";
import {store} from "./store"
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme.color';
import TopBar from "./common/TopBar";
import Game from "./views/Game/Game";
import BottomBar from "./common/BottomBar";

const App: React.FC = () => {
  return (
  	<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Router>
					<TopBar/>
					<Route path="/" exact component={Main}/>
					<Route path="/game" component={Game}/>
					<BottomBar/>
				</Router>
			</Provider>
		</ThemeProvider>
  );
};

export default App;
