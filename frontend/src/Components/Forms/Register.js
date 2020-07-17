import React, { Component } from "react";

export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			fullname: "",
			dob: "",
			nationality: "",
			email: "",
			gender: "",
			password1: "",
			password2: "",
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
						<label htmlFor="fullname">Full Name</label>
						<input
							type="text"
							name="fullname"
							className="form-control"
							id="fullname"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							className="form-control"
							id="username"
							required
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="fullname">Gender</label>
						<select class="form-control" id="gender">
							<option>Male</option>
							<option>Female</option>
							<option>Transgender</option>
							<option>Non-Binary</option>
							<option>Prefer Not to Say</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
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
							name="password1"
							className="form-control"
							id="inputPassword1"
							required
							onChange={this.handleChange}
						/>
					</div>{" "}
					<div className="form-group">
						<label htmlFor="inputPassword2">Password</label>
						<input
							type="password"
							name="password2"
							className="form-control"
							id="inputPassword2"
							required
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="dob">DOB</label>
						<input
							type="date"
							name="dob"
							className="form-control"
							id="dob"
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

export default Register;
