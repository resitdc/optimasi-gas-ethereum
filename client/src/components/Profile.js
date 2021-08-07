import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {

	render() {
		return (
            <div className="b-profile">
                <div className="b-profile-box">
                    <h1>YOUR ACCOUNT INFO</h1>
                    <div className="b-profile-field" label="Account id">
                        {this.props.account}
                    </div>
                    <div className="b-profile-field" label="Balance">
                        {this.props.balance} ETH
                    </div>
                </div>
            </div>
		);
	}
}

export default Profile;
