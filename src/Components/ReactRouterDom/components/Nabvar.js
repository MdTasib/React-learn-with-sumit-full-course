import React from 'react';
import { NavLink } from 'react-router-dom';

const Nabvar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						exact
						to='/'
						activeStyle={{
							fontWeight: 'blod',
							color: 'red',
						}}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/about'
						activeStyle={{
							fontWeight: 'blod',
							color: 'red',
						}}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/service'
						activeStyle={{
							fontWeight: 'blod',
							color: 'red',
						}}>
						Service
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/post/js'
						activeStyle={{
							fontWeight: 'blod',
							color: 'red',
						}}>
						JavaScript
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nabvar;
