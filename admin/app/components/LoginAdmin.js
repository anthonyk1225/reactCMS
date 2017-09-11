import React from 'react';
import {Checkbox, Form, Icon, Input, Button, notification} from 'antd';
import {admin} from '../../accounts';
const FormItem = Form.Item;

class LoginAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	submit = e => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        const validUser = values.userName === admin.login.username.toLowerCase();
	        const validPass = values.password === admin.login.password;
	        if (validUser && validPass){
	        	this.logIn();
	        } else {
	        	notification['error']({message: 'Incorrect Credentials', description: 'The username and password don\'t match up'});
	        }
	      } else {
	        notification['error']({message: 'Incorrect Credentials', description: 'The username and password don\'t match up'});
	      }
	    });
	}
	logIn = () => {
		this.props.logIn();
	}
	render(){
    	const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
		return(
			<Form onSubmit={this.submit} className="login-form">
		        <FormItem>
					{getFieldDecorator('userName', {
						rules: [{required: true, message: 'Please input your username!'}],
					})(		        
						<Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />
					)}
		        </FormItem>
		        <FormItem>
					{getFieldDecorator('password', {
						rules: [{required: true, message: 'Please input your Password!' }],
					})(		        
						<Input prefix={<Icon type="lock" style={{fontSize: 13}} />} type="password" placeholder="Password" />
			        )}
		        </FormItem>
		        <FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>Remember me</Checkbox>
					)}		        
		        	<a className="login-form__forgot" href="">Forgot password</a>
					<Button
						className='login-form__button'
						type="primary"
						htmlType="submit">
						Log in
					</Button>
					Or <a href="">register now!</a>
		        </FormItem>		        	        		
			</Form>
		);
	}
}

export default Form.create()(LoginAdmin);
