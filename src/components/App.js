import React from 'react';
import Container from 'react-bootstrap/Container';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import { ipcRenderer, ipcMain } from 'electron';

import Top from './top/Top';
import Setup from './setup/Setup';

function App() {
	return (
		<HashRouter>
			<Container>
				<Route exact path="/" component={Top}></Route>
				<Route exact path="/setup" component={Setup}></Route>
			</Container>
		</HashRouter>
	)
}


export default App;
