import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Nabvar from './components/Nabvar';
import Error from './components/Error';
import Posts from './components/Posts';
import Dashboard from './components/Dashboard';

const ReactRouterDom = () => {
	const isLoggedIn = false;
	return (
		<Router>
			<Nabvar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/service' component={Service} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/post/:category' component={Posts} />

				<Route path='/login'>
					{isLoggedIn ? <Redirect to='/dashboard' /> : <Home />}
				</Route>

				<Route component={Error} />
			</Switch>
		</Router>
	);
};

export default ReactRouterDom;
