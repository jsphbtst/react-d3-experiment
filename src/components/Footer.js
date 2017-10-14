import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
	render() {
		return(
		<div className="Footer">
        <br />
        <hr />
		<footer>
		<Row>
			<Col>
	            <p className="align-self-center">
	            	<b>&copy; Joseph J. Bautista 2017</b>
	            </p>
			</Col>
		</Row>
		</footer>
		</div>
		);
	}
}
export default Footer;