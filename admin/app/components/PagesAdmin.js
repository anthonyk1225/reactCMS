import React from 'react';
import {Button, Table, Icon} from 'antd';

export default class PagesAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	showModal = () => {
		this.props.showModal();
	}
	render(){
		const columns = [
			{
				title: 'Page/Bucket',
				dataIndex: 'page',
				key: 'page',
				render: (text, record) => <a href={`/admin/pages/${record.name}/edit`}><Icon type="code-o" /> {record.name}</a>,
			}, 
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
				    <span>
				      <a href={`/admin/pages/${text.name}/edit`}>Edit</a>
				      <span className="ant-divider"/>
				      <a onClick={this.showModal}>Delete</a>
				      <span className="ant-divider"/>
				    </span>
			  	),
			}
		];		
		return(
			<div className='admin-pages'>
				<Table dataSource={this.props.pages} columns={columns} rowKey={(record, i) => i}/>
				<Button className='admin-pages__button' type='primary' onClick={this.showModal}>
					<p><Icon type="file-add" />Add Page</p>
				</Button>				
			</div>
		);
	}
}
