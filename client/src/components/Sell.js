import React, { Component } from 'react'

export class Sell extends Component {
	constructor(props) {
		super(props)
		this.state = {
			paramsNama: "",
			paramsStorageCapacity: "",
			paramsHardiskType: "",
			paramsHardiskVersion: "",
			paramsRead: "",
			paramsWrite: "",
			paramsPrice: "",
			paramsCatatan: "",
			paramsOptimize: false,
		}
	}

	submitForm = (event) => {
		event.preventDefault();
		let optimized = this.state.paramsOptimize;
		let paramsNama = this.state.paramsNama;
		let paramsStorageCapacity = this.state.paramsStorageCapacity;
		let paramsHardiskType = this.state.paramsHardiskType;
		let paramsHardiskVersion = this.state.paramsHardiskVersion;
		let paramsRead = this.state.paramsRead;
		let paramsWrite = this.state.paramsWrite;
		let paramsPrice = this.state.paramsPrice;
		let paramsCatatan = this.state.paramsCatatan;

		if(optimized){
			this.props.createProductOptimized(paramsNama, paramsStorageCapacity, paramsHardiskType, paramsHardiskVersion, paramsRead, paramsWrite, paramsPrice, paramsCatatan)
		}else{
			this.props.createProduct(paramsNama, paramsStorageCapacity, paramsHardiskType, paramsHardiskVersion, paramsRead, paramsWrite, paramsPrice, paramsCatatan)
		}
	}

	render() {
		return (
			<div className="w-100">
				<div className={"b-form-sell" + (this.state.paramsOptimize ? " b-special" : "")}>
					<div className="b-form-sell-box">
						<h1 className="text-light">Sell Hardisk</h1>
						<form onSubmit={this.submitForm}>
						<div className="row">
							<div className="col-12">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsNama">Name</label>
									<input
									id="paramsNama"
									type="text"
									onChange={ (event) => this.setState({paramsNama: event.target.value}) } 
									className="form-control"
									placeholder="Hardisk Name"
									required />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsStorageCapacity">Storage Capacity</label>
									<input
									id="paramsStorageCapacity"
									type="number"
									onChange={ (event) => this.setState({paramsStorageCapacity: event.target.value}) } 
									className="form-control"
									placeholder="128 GB"
									required />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsHardiskType">Hardisk Type</label>
									<select
									id="paramsHardiskType"
									className="form-control"
									onChange={ (event) => this.setState({paramsHardiskType: event.target.value}) } 
									required
									>
										<option value="SSD">SSD</option>
										<option value="HDD">HDD</option>
										<option value="SSHD">SSHD</option>
									</select>
								</div>
							</div>
							<div className="col-4">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsHardiskVersion">Hardisk Version</label>
									<input
									id="paramsHardiskVersion"
									type="text"
									onChange={ (event) => this.setState({paramsHardiskVersion: event.target.value}) } 
									className="form-control"
									placeholder="NVME M2"
									required />
								</div>
							</div>
							<div className="col-6">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsRead">Hardisk Read Speed</label>
									<input
									id="paramsRead"
									type="number"
									onChange={ (event) => this.setState({paramsRead: event.target.value}) } 
									className="form-control"
									placeholder="3000"
									required />
								</div>
							</div>
							<div className="col-6">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsWrite">Hardisk Write Speed</label>
									<input
									id="paramsWrite"
									type="number"
									onChange={ (event) => this.setState({paramsWrite: event.target.value}) } 
									className="form-control"
									placeholder="2500"
									required />
								</div>
							</div>
							<div className="col-12">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsCatatan">Product Description</label>
									<textarea
										id="paramsCatatan"
										type="text"
										onChange={ (event) => this.setState({paramsCatatan: event.target.value}) } 
										className="form-control"
										placeholder="Product Description"
										required
									>
									</textarea>
								</div>
							</div>
							<div className="col-12">
								<div className="form-group mr-sm-2">
									<label className="text-light" htmlFor="paramsPrice">Price</label>
									<input
									id="paramsPrice"
									type="number"
									onChange={ (event) => this.setState({paramsPrice: event.target.value}) } 
									className="form-control"
									placeholder="2 ETH"
									required />
								</div>
							</div>
						</div>
						<div className="form-group mr-sm-2">
							<label className="text-light" htmlFor="paramsOptimize">
								<input
								id="paramsOptimize"
								type="checkbox"
								onChange={ (event) => this.setState({paramsOptimize: event.target.checked}) } 
								className="mr-2"
								/>
								Optimize Gass Fee
							</label>
						</div>
						<button type="submit" className="btn btn-danger btn-block py-3 mr-3">Sell Product</button>
					</form>
					</div>
				</div>
				
				{/* <table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.filter(p => p.owner === this.props.account).length > 0
							? this.props.products
								.filter(p => p.owner === this.props.account)
								.map((product, key) => {
								return (
									<tr key={key}>
										<th scope="row">{key+1}</th>
										<td>{product.name}</td>
										<td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
									</tr>
								)
								})
							: <tr><td colSpan="3" className="text-center">You not have any products yet.</td></tr>
						}
					</tbody>
				</table> */}
			</div>
		)
	}
}

export default Sell
