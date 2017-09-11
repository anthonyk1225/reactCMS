import React from 'react';
import {LoginAdmin} from '../components';
import {LoggedInAdmin} from './';
import {Redirect} from 'react-router-dom';

export default class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
		};
	}
	logIn = () => {
		this.setState({loggedIn: true});
	}
	logout = () => {
		this.setState({loggedIn: false});
	}
	render(){
		if (window.location.pathname === '/admin' && !this.state.loggedIn) {
			return <Redirect push to='/admin/login' />;
		} else if (window.location.pathname === '/admin/login' && this.state.loggedIn) {
			return <Redirect push to='/admin' />;
		}
		return(
			<div className='admin-panel'>
				{this.state.loggedIn ?
					<LoggedInAdmin logout={this.logout}/>
					:
					<LoginAdmin logIn={this.logIn} />
				}
			</div>
		);
	}
}

