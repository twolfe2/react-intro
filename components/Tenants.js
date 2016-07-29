import React, { Component } from 'react'
import Tenant from './Tenant'

export default class Tenants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: [],
      name: '',
      address: '',
      age: 0
    }
    console.log(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this);
  }

  onSubmit() {
    console.log('submit clicked', this.state);
    let newTenant = {
      name: this.state.name,
      address: this.state.address,
      age: this.state.age
    };
    // console.log(newTenant);
    this.setState({tenants: this.state.tenants.concat([newTenant])});
    console.log('tenants after add',this.state.tenants);
  }

  render() {
    return (
      <div>
        <p>Hi from tenants</p>
       <form className="col-md-8 col-md-offset-2" onSubmit={this.onSubmit}>
        <div className="text-center">

        <h3>Add a New Tenant:</h3>
      </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name}
                onChange={e => this.setState({name: e.target.value})} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address}
                onChange={e => this.setState({address: e.target.value})}required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" placeholder="Age" value={this.state.age}
                onChange={e => this.setState({age: e.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary btn-block" >Add Tenant</button>            
        </form>
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.state.tenants.map(tenant => {
              console.log('map',tenant);
              return <Tenant {...tenant} />
            })}
          </tbody>
        </table>
             
        </div>
    )
  }
}
