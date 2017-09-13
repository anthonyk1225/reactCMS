import React from 'react';
import {Button, Table, Icon} from 'antd';

const data = [{
	key: '1',
	page: 'Intro',
}, {
	key: '2',
	page: 'Data-backed-by-science',
}, {
	key: '3',
	page: 'Colors-and-Nintendo',
}];

export default class PagesAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	showModal = () => {
		this.props.showModal();
	}
	render(){
		const columns = [{
			title: 'Page',
			dataIndex: 'page',
			key: 'page',
			render: text => <a href={`/admin/pages/${text}/edit`}><Icon type="code-o" /> {text}</a>,
		}, {
			title: 'Action',
			key: 'action',
			render: (text, record) => (
			    <span>
			      <a href={`/admin/pages/${text.page}/edit`}>Edit</a>
			      <span className="ant-divider"/>
			      <a onClick={this.showModal}>Delete</a>
			      <span className="ant-divider"/>
			    </span>
		  	),
		}];		
		return(
			<div className='admin-pages'>
				<Table dataSource={data} columns={columns} />
				<Button className='admin-pages__button' type='primary' onClick={this.showModal}>
					<p><Icon type="file-add" />Add Page</p>
				</Button>				
			</div>
		);
	}
}
