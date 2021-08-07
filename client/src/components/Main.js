import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

	render() {
		return (
			<div id="content">
				<div className="b-home-header">
					<h1>HARDISK MARKETPLACE</h1>
				</div>
				<div className="b-list-data">
					<div className="container">
						<table className="b-table-data">
							<thead>
								<tr>
									<th>Product Name</th>
									<th>Type</th>
									<th>Version</th>
									<th>Price</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<td>Sandisk</td>
									<td>SSD</td>
									<td>NVME M2</td>
									<td>3 ETH</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
