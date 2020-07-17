import React, { Component } from "react";

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		alert(this.state);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputEmail1">Email address</label>
						<input
							type="email"
							name="email"
							className="form-control"
							id="inputEmail"
							required
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="inputPassword1">Password</label>
						<input
							type="password"
							name="password"
							className="form-control"
							id="inputPassword"
							required
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
