import React from 'react';
import { Route } from 'react-router';

function LoginWrapper({ component: Component, ...rest }) {
  return (
		<Route
			render={(props) =>
					<Component {...props} setAuth={rest.setAuth}/>
				}
		/>
	);
}

export default LoginWrapper;
