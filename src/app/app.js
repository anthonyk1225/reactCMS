import React from 'react';
import ReactDOM from 'react-dom';
import {MainPage} from './views';
import {PanelAdmin} from '../../admin/app/views'
import scss from '../assets/css/main.scss';
import scssAdmin from '../../admin/assets/css/main.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={() => <MainPage/> } />
			<Route exact path="/admin" component={() => <PanelAdmin/> } />
			<Route exact path="/admin/login" component={() => <PanelAdmin/> } />
		</div>
	</Router>, 
	document.getElementById('app'));
window.React = React; 
