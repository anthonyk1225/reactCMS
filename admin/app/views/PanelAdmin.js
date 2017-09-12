import React from 'react';
import {LoginAdmin} from '../components';
import {LoggedInAdmin} from './';

export default class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}
	logIn = () => {
		this.setState({loggedIn: true});
	}
	logout = () => {
		this.setState({loggedIn: false});
	}
	render(){
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
