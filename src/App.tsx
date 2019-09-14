import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main/Main";
import {store} from "./store"
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme.color';
import TopBar from "./common/TopBar";

const App: React.FC = () => {
  return (
  	<ThemeProvider theme={theme}>
			<Provider store={store}>
				<TopBar/>
				<Router>
					<Route path="/" exact component={Main}/>
				</Router>
			</Provider>
		</ThemeProvider>
  );
};

export default App;
