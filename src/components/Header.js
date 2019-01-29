import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<nav class="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
