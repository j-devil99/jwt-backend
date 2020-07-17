import React, { Component } from "react";
import "./Homepage.scss";

export class Homepage extends Component {
	render() {
		return (
			<div style={{"height": "90%"}}>
				<div className="d-flex flex-column h-100 justify-content-center">
					<div className="col-md-6 align-self-end">
						<p className="landing-title">
							Every 
							<br />
							<span> cinephile’s </span>
							<br />
							dream platform 
							<br />
							to discuss movies 
							<br />
							and keep track of them.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
