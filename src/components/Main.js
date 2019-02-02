import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRouter';
import LoginWrapper from '../containers/LoginWrapper';

class Main extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<LoginWrapper path="/login" component={Login} />
					<Route path="/news" component={News} />
					<PrivateRoute user={user} path="/profile" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</main>
		);
	}
}

export default Main;
