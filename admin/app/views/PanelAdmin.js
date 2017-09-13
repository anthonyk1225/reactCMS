import React from 'react';
import {LoginAdmin} from '../components';
import {LoggedInAdmin} from './';
import {MainActions} from '../actions';
import {MainStore} from '../stores';

export default class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			userFetched: false,
		};
	}
	componentWillMount(){
		MainStore.onMainUpdate(this.updateUser);
	}
	componentDidMount(){
		if (!this.state.userFetched){
			MainActions.getUser();
			this.state.userFetched = true;
		}
	}
	componentWillUnmount(){
		MainStore.removeOnMainUpdate(this.updateUser, logged);
	}
	updateUser = store => {
		this.setState({loggedIn: store.loggedInUser});
	}
	render(){
		if (!this.state.userFetched){
			return null;
		}
		return(
			<div className='admin-panel'>
				{this.state.loggedIn ?
					<LoggedInAdmin logout={() => this.updateUser(false)}/>
					:
					<LoginAdmin logIn={() => this.updateUser(true)} />
				}
			</div>
		);
	}
}
