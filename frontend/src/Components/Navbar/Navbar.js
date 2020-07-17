import React, { Component } from "react";
import { Modal } from "../Modal/Modal";
import "./Navbar.scss";

export class Navbar extends Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavCollapsed: true,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavCollapsed: !this.state.isNavCollapsed,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	render() {
		const navCollapsed = this.state.isNavCollapsed;
		const classOne = navCollapsed
			? "collapse navbar-collapse"
			: "collapse navbar-collapse show";
		const classTwo = navCollapsed
			? "navbar-toggler navbar-toggler-right collapsed ml-auto"
			: "navbar-toggler navbar-toggler-right ml-auto";
		return (
			<div style={{"height":"10%"}}>
				<nav className="navbar navbar-dark navbar-expand-lg">
					<a className="navbar-brand text-danger" href="#">
						Cinephile
					</a>
					<button
						className={`${classTwo}`}
						onClick={this.toggleNav}
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`${classOne}`} id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link active " href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-item nav-link" href="#">
								About
							</a>
							<button
								className="btn btn-outline-warning nav-btn"
								onClick={this.toggleModal}
							>
								Login / Register
							</button>
						</div>
					</div>
					<Modal
						isModalOpen={this.state.isModalOpen}
						toggleModal={this.toggleModal}
					/>
				</nav>
			</div>
		);
	}
}

export default Navbar;
