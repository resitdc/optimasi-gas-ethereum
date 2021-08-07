import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark shadow b-navbar">
				<Link
					className="navbar-brand"
					to="/"
					rel="noopener noreferrer"
				>
					Hardisk Marketplace
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className={this.props.active === 'sell' ? 'nav-item active' : 'nav-item'}>
							<Link className="nav-link" to="/sell">Sell</Link>
						</li>
						{/* <li className={this.props.active === 'products' ? 'nav-item active' : 'nav-item'}>
							<Link className="nav-link" to="/products">Products</Link>
						</li> */}
						<li className={this.props.active === 'profile' ? 'nav-item active' : 'nav-item'}>
							<Link className="nav-link" to="/profile">Profile</Link>
						</li>
					</ul>
					{/* <div className="d-flex flex-column">
						<small className="nav-link text-dark p-0"><span id="account">Your account: <b>{this.props.account}</b></span></small>
						<small className="nav-link text-dark p-0"><span id="account">Balance: <b>{this.props.balance} ETH</b></span></small>
					</div> */}
				</div>
			</nav>
		);
	}
}

export default Navbar;
