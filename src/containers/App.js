import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { user } = this.props;
		return (
			<div>
				<Header />
				<Main user={user} />
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		user: store.user
	};
};

export default withRouter(connect(mapStateToProps)(App));
