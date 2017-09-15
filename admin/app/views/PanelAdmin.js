import React from 'react';
import {LoginAdmin} from '../components';
import {LoggedInAdmin} from './';
import {MainActions} from '../actions';
import {MainStore, PageStore} from '../stores';
import {Form, Modal, LocaleProvider, Input, notification, Icon} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const FormItem = Form.Item;

class PanelAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			initialBoot: false,
			visible: false,
			loginError: false,
			pages: [],
		};
	}
	componentWillMount(){
		MainStore.onMainUpdate(this.updateUser);
		PageStore.onPageUpdate(this.updatePages);
	}
	componentDidMount(){
		if (!this.state.initialBoot){
			MainActions.getUser();
			MainActions.getPages(0);
			this.state.initialBoot = true;
		}
	}
	componentWillUnmount(){
		MainStore.removeOnMainUpdate(this.updateUser);
		PageStore.removeOnPageUpdate(this.updatePages);
	}
	showModal = () => {
		this.setState({visible: true});
	}
	handleOk = e => {
		this.props.form.validateFields((err, values) => {
	    	if (!err) {
	    		values.parentId = 0;
				MainActions.createPage(values);
	      	} else {
	        	notification['error']({message: 'Missing info', 
	        		description: `Please include a ${!values.title ? 'title': ''} ${!values.title && !values.url ? 'and': ''} ${!values.url ? 'URL': ''}`});
	      	}
	    });		
	}
	handleCancel = e => {
		this.setState({visible: false});
	}
	updateUser = store => {
		this.setState({loggedIn: store.loggedInUser, loginError: store.loginError});
	}
	updatePages = state => {
		if (state.pageAdded){
			notification['success']({message: 'Page added', description: 'Nice work!'});
			this.setState({visible: false, pages:state.pages});
		} else {
			this.setState({pages: state.pages});
		}
	}	
	render(){
		const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
		if (!this.state.initialBoot){
			return null;
		}
		return(
			<LocaleProvider locale={enUS}>
				<div className='admin-panel'>
					{this.state.loggedIn ?
						<LoggedInAdmin showModal={this.showModal} pages={this.state.pages} logout={() => MainActions.logOut()}/>
						:
						<LoginAdmin loginError={this.state.loginError}/>
					}
			        <Modal
			        	className='admin-modal'
			        	title=""
			        	visible={this.state.visible}
			        	onOk={this.handleOk}
			        	onCancel={this.handleCancel}
			        >
			        	<Form className='admin-create-page-form'>
			        		<FormItem className='admin-modal__input'>
								{getFieldDecorator('title', {
									rules: [{required: true, message: 'Please enter a title!'}],
								})(
						        	<div>
							        	<p className=''>Add a new page</p>
										<Input prefix={<Icon type="star"></Icon>} placeholder="Title" />
							        </div>
								)}
				        	</FormItem>
				        	<FormItem className='admin-modal__input'>
								{getFieldDecorator('url', {
									rules: [{required: true, message: 'Please enter a url!'}],
								})(
						        	<div>
						        		<p>URL-appendix</p>
						        		<Input prefix={<Icon type="link"></Icon>} placeholder="" />
						        	</div>
								)}
					        </FormItem>
				        </Form>
			        </Modal>
				</div>
			</LocaleProvider>
		);
	}
}

export default Form.create()(PanelAdmin);
