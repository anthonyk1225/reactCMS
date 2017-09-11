import React from 'react';
import {Button, Menu, Icon, Input} from 'antd';
import {LoginAdmin, PagesAdmin, HamburgerAdmin} from '../components';
const Search = Input.Search;

const pages = [
	'Dashboard',
];

export default class LoggedInAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}
	toggleCollapsed = () => {
		this.setState({collapsed: !this.state.collapsed});
	}	
	render(){
		return(
			<div>
				<div className='admin-header'>
					<HamburgerAdmin />
					<div className='admin-header__breadcrumbs'>
						{pages.map((item, key) => {
							return(<p key={key} >{item}<Icon type="right" style={{'fontSize': '42px', color: '#555'}}/></p>)
						})}
					</div>
					<Search
						className='admin-header__search'
						placeholder="search"
						style={{width: 150}}
						onSearch={value => console.log(value)}
					/>					
				</div>
				<PagesAdmin />
			</div>
		);
	}
}
