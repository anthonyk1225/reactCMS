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
	render(){
		return(
			<div>
				<PagesAdmin />
				<HeaderAdmin logout={this.logout}/>
			</div>
		);
	}
}
