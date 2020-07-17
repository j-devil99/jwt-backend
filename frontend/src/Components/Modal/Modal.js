import React, { Component } from "react";
import { Login } from "../Forms/Login";
import { Register } from "../Forms/Register";

export class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginActive: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if (e.target.innerText === "Login") {
			this.setState({
				loginActive: true,
			});
		} else if (e.target.innerText === "Register") {
			this.setState({
				loginActive: false,
			});
		}
	}

	render() {
		const modalOpen = this.props.isModalOpen;
		const classThree = modalOpen
			? "modal fade show d-block"
			: "modal fade d-none";
		return (
			<div>
				<div
					className={`${classThree}`}
					id="accountsModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="accountsModal"
					aria-hidden={!this.props.isModalOpen}
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header bg-danger">
								<h5
									className={
										this.state.loginActive ? "nav-link active" : "nav-link"
									}
									onClick={this.handleClick}
								>
									Login
								</h5>
								<h5
									className={
										!this.state.loginActive ? "nav-link active" : "nav-link"
									}
									onClick={this.handleClick}
								>
									Register
								</h5>
								<button
									type="button"
									className="close"
									onClick={this.props.toggleModal}
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{this.state.loginActive ? <Login /> : <Register />}
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									onClick={this.props.toggleModal}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
