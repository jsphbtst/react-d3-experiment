import React, { Component } from 'react';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
	render() {
		return(
		<div className="App">
			<Header />
			<Page />
			<Footer />
		</div>
		);
	}
}
export default App;

