import React from 'react';
import { fakeAuth } from '../helpers/fakeAuth';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
		error: ''
	};
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
							onChange={(e) => this.setState({ username: e.target.value })}
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type="text"
							name="password"
							value={this.state.password}
							placeholder="Enter password"
							onChange={(e) => this.setState({ password: e.target.value })}
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
