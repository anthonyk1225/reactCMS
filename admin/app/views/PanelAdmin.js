import React from 'react';
import {LoginAdmin} from '../components';
import {LoggedInAdmin} from './';
import {MainActions} from '../actions';
import {MainStore} from '../stores';
import {Modal, LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

export default class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			userFetched: false,
			visible: false,
			loginError: false,
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
		MainStore.removeOnMainUpdate(this.updateUser);
	}
	showModal = () => {
		this.setState({visible: true});
	}
	handleOk = e => {
		this.setState({visible: false});
	}
	handleCancel = e => {
		this.setState({visible: false});
	}	
	updateUser = store => {
		this.setState({loggedIn: store.loggedInUser, loginError: store.loginError});
	}
	render(){
		if (!this.state.userFetched){
			return null;
		}
		return(
			<LocaleProvider locale={enUS}>
				<div className='admin-panel'>
					{this.state.loggedIn ?
						<LoggedInAdmin showModal={this.showModal} logout={() => MainActions.logOut()}/>
						:
						<LoginAdmin loginError={this.state.loginError}/>
					}
			        <Modal
			        	title="Basic Modal"
			        	visible={this.state.visible}
			        	onOk={this.handleOk}
			        	onCancel={this.handleCancel}
			        >
			        	<p>Some contents...</p>
			        	<p>Some contents...</p>
			        	<p>Some contents...</p>
			        </Modal>				
				</div>
			</LocaleProvider>
		);
	}
}
