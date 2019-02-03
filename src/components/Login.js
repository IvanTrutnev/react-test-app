import React from 'react';
import { fakeAuth } from '../helpers/fakeAuth';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
		error: ''
  };
  handleChange = (e) => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName
    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.username !== fakeAuth.username || this.state.password !== fakeAuth.password) {
			this.setState({ error: 'Имя пользователя или пароль введены не верно' });
		} else {
			this.setState({ error: '' });
			this.props.setAuth();
			this.props.history.push('/profile');
		}
	};
	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							value={this.state.username}
              placeholder="Enter username"
              data-field-name={'username'}
              onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type="text"
							name="password"
							value={this.state.password}
              placeholder="Enter password"
              data-field-name={'password'}
              onChange={this.handleChange}
						/>
					</div>
					<input type="submit" value="Submit" />
					{this.state.error && <div className="error">{this.state.error}</div>}
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
