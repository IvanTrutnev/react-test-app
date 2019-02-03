import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			render={(props) =>
				rest.user.isAuth ? (
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

const mapStateToProps = (store) => {
	return {
		user: store.user
	};
};

export default connect(mapStateToProps)(PrivateRoute);
