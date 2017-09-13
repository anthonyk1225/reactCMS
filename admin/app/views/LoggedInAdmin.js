import React from 'react';
import {PagesAdmin, HeaderAdmin} from '../components';

export default class LoggedInAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	logout = () => {
		this.props.logout();
	}
	showModal = () => {
		this.props.showModal();
	}
	render(){
		return(
			<div>
				<PagesAdmin showModal={this.showModal}/>
				<HeaderAdmin logout={this.logout}/>
			</div>
		);
	}
}
