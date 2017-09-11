import React from 'react';
import {Menu, Icon, Button} from 'antd';
const SubMenu = Menu.SubMenu;

export default class HamburgerAdmin extends React.Component {
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
			<div className='admin-header__hamburger'>
				<Button className='admin-header__hamburger--button' type="primary" onClick={this.toggleCollapsed}>
					<Icon type={this.state.collapsed ? 'menu-unfold': 'menu-fold'} />
				</Button>
				{!this.state.collapsed &&
					<Menu
						className='admin-header__hamburger--menu'
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']} 
						mode="inline"
					  	theme="dark"
					  	inlineCollapsed={this.state.collapsed}
					>
					 	<Menu.Item key="1">
					    	<Icon type="desktop" />
					   		<span>Dashboard</span>
					  	</Menu.Item>
					  	<Menu.Item key="2">
					    	<Icon type="info-circle-o" />
					    	<span>Site options</span>
					  	</Menu.Item>
					  	<Menu.Item key="3">
							<Icon type="user" />
							<span>Users</span>
						</Menu.Item>
					  	<Menu.Item key="4">
							<Icon type="logout" />
							<span>Logout</span>
						</Menu.Item>						
					</Menu>
				}
			</div>
		);
	}
}
