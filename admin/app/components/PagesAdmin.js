import React from 'react';
import {Table, Icon} from 'antd';

const columns = [{
	title: 'Page',
	dataIndex: 'page',
	key: 'page',
	render: text => <a href="#"><Icon type="code-o" /> {text}</a>,
}, {
	title: 'Action',
	key: 'action',
	render: (text, record) => (
	    <span>
	      <a href="#">Edit</a>
	      <span className="ant-divider"/>
	      <a href="#">Delete</a>
	      <span className="ant-divider"/>
	    </span>
  	),
}];

const data = [{
	key: '1',
	page: 'Intro',
}, {
	key: '2',
	page: 'Data backed by science',
}, {
	key: '3',
	page: 'Colors and Nintendo',
}];

export default class PagesAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render(){
		return(
			<Table className='admin-pages' dataSource={data} columns={columns} />
		);
	}
}
