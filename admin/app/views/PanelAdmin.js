import React from 'react';
import {LoginAdmin, PagesAdmin} from '../components';
import {LoggedInAdmin} from './'

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
	render(){
		return(
			<div className='admin-panel'>
				{this.state.loggedIn ?
					<LoggedInAdmin />
					:
					<LoginAdmin logIn={this.logIn} />
				}
			</div>
		);
	}
}

