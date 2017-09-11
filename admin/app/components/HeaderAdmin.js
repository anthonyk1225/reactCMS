import React from 'react';
import {Menu, Icon, Button, Input} from 'antd';
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

const pages = [
	'Dashboard',
];

export default class HeaderAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}
	toggleCollapsed = () => {
		this.setState({collapsed: !this.state.collapsed});
	}
	menuOnClick = menu => {
		switch(menu.key) {
			case "1":
				return null;
			case "2":
				return null;
			case "3":
				return null;
			case "4":
				this.props.logout();
			default:
				return null;
		}
	}
	render(){
		return(
			<div className='admin-header'>
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
						  	onClick={this.menuOnClick}
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
		);
	}
}
