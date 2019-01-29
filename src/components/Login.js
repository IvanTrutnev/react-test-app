import React from 'react';

class Login extends React.Component {
	render() {
		return (
			<div>
				<h1>Login</h1>
				<form>
					<div>
						<label>Name:</label>
						<input type="text" name="name" />
					</div>
					<div>
						<label>
							Password:
							<input type="text" name="password" />
						</label>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Login;
