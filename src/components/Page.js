import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import D3Map from './D3Map';

class Page extends Component {
	render() {
		return(
		<div className="Page">
			<br />
			<h2>Integrating React and D3</h2>
			<br />

			<h4>The Philippine Map</h4>
			<p>I first played with D3 in order to create this map. After which, I fiddled around with React by playing around with the lifecycle methods in order to integrate the two. N number of watched videos and read articles and GitHub codes later, I managed to integrate the two and render this map using both D3 and React. I plan to update this map by binding it with some data. I'm currently scraping data, so this part of the site is still under construction. To be continued!</p>
			<svg height="720" width="1080">
				<D3Map />
			</svg>


			{/*<Row>
				<Col xs="12" sm="5">
					<h4>The Philippines</h4>
					<svg height="720" width="500">
						<D3Map />
					</svg>					
				</Col>

				<Col xs="12" sm="4">
					<h4>GREETINGS FROM col-xs-12-sm-4</h4>
				</Col>

				<Col xs="12" sm="3">
					<h4>GREETINGS FROM col-xs-12-sm-3</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</Col>
			</Row>*/}
		</div>
		);
	}
}
export default Page;