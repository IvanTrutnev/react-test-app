import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import PrivateRoute from './PrivateRouter';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/news" component={News} />
					<PrivateRoute user={user} path="/profile" component={Profile} />
				</Switch>
			</main>
		);
	}
}

export default Main;
