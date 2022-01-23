import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './components/Pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Pages} />
			</Switch>
		</Router>
	);
}

export default App;
