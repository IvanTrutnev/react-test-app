import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from '../helpers/fakeAuth';

function PrivateRoute({ component: Component}) {
	return (
		<Route
			render={(props) =>
				fakeAuth.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)}
		/>
	);
}

export default PrivateRoute;
