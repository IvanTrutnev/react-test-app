import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { setAuth } from '../actions/Login';

class App extends Component {
	render() {
		const { user, setAuthAction } = this.props;
		return (
			<div>
				<Header />
				<Main user={user} setAuth={setAuthAction} />
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		user: store.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setAuthAction: () => dispatch(setAuth(true))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
