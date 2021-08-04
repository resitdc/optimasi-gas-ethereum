import React, { Component } from 'react'

export class Sell extends Component {
	render() {
		return (
			<div className="col-md-12">
				<div className="col-md-4">
					<h1>Sell Product</h1>
					<form 
						onSubmit={(event) => {
							event.preventDefault()
							// const name = window.web3.utils.asciiToHex(this.productName.value)
							// // const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
							// const price = this.productPrice.value.toString())
							// const catatan = window.web3.utils.asciiToHex(this.productDescription.value)
							let paramsNama = window.web3.utils.asciiToHex(this.paramsNama.value);
							let paramsStorageCapacity = window.web3.utils.asciiToHex(this.paramsStorageCapacity.value);
							let paramsHardiskType = window.web3.utils.asciiToHex(this.paramsHardiskType.value);
							let paramsHardiskVersion = window.web3.utils.asciiToHex(this.paramsHardiskVersion.value);
							let paramsRead = window.web3.utils.asciiToHex(this.paramsRead.value);
							let paramsWrite = window.web3.utils.asciiToHex(this.paramsWrite.value);
							let paramsPrice = window.web3.utils.asciiToHex(this.paramsPrice.value);
							let paramsCatatan = window.web3.utils.asciiToHex(this.paramsCatatan.value);

							this.props.createProduct(paramsNama, paramsStorageCapacity, paramsHardiskType, paramsHardiskVersion, paramsRead, paramsWrite, paramsPrice, paramsCatatan)
							// alert(window.web3.utils.asciiToHex("restu"));
						}}>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsNama">Name</label>
							<input
							id="paramsNama"
							type="text"
							ref={(input) => { this.paramsNama = input }}
							className="form-control"
							placeholder="Hardisk Name"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsStorageCapacity">Storage Capacity</label>
							<input
							id="paramsStorageCapacity"
							type="number"
							ref={(input) => { this.paramsStorageCapacity = input }}
							className="form-control"
							placeholder="128 GB"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsPrice">Price</label>
							<input
							id="paramsPrice"
							type="number"
							ref={(input) => { this.paramsPrice = input }}
							className="form-control"
							placeholder="2 ETH"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsHardiskType">Hardisk Type</label>
							<input
							id="paramsHardiskType"
							type="text"
							ref={(input) => { this.paramsHardiskType = input }}
							className="form-control"
							placeholder="SSD / HDD / SSHD"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsHardiskVersion">Hardisk Version</label>
							<input
							id="paramsHardiskVersion"
							type="text"
							ref={(input) => { this.paramsHardiskVersion = input }}
							className="form-control"
							placeholder="NVME M2"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsRead">Hardisk Read Speed</label>
							<input
							id="paramsRead"
							type="number"
							ref={(input) => { this.paramsRead = input }}
							className="form-control"
							placeholder="3000"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsWrite">Hardisk Write Speed</label>
							<input
							id="paramsWrite"
							type="number"
							ref={(input) => { this.paramsWrite = input }}
							className="form-control"
							placeholder="2500"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="paramsCatatan">Product Description</label>
							<textarea
								id="paramsCatatan"
								type="text"
								ref={(input) => { this.paramsCatatan = input }}
								className="form-control"
								placeholder="Product Description"
								required
							>
							</textarea>
						</div>
						<button type="submit" className="btn btn-info">Submit</button>
					</form>
				</div>
				<hr className="my-4"/>
				<h5>Your Products</h5>
				<table className="table table-bordered">
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
				</table>
			</div>
		)
	}
}

export default Sell
