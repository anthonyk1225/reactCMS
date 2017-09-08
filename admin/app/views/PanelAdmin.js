import React from 'react';
import {LoginAdmin} from '../components';

export default class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}
	render(){
		return(
			<div className='admin-panel'>
				{this.state.loggedIn ? 
					<HeaderAdmin />
					:
					<LoginAdmin />
				}
			</div>
		)
	}
}

