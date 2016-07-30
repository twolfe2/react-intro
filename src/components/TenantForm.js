import React, { Component } from 'react'
import TenantActions from '../actions/TenantActions'



export default class TenantForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      age: 0
    };
    
    this.onFormSubmit = this.onFormSubmit.bind(this);


  }
  

  onFormSubmit(e) {
    e.preventDefault();
    let {onSubmit} = this.props;
    console.log('this.state', this.state);
    let newTenant = this.state;
    console.log('1. On submit fired in Tenant Form component, tenant: ', newTenant);
    console.log('***Firing TenantActions.addNewTenant***');
    TenantActions.addNewTenant(newTenant);
    // onSubmit(newTenant);
    this.setState({name: '', address: '', age: 0});
  }

  render() {
    return (
      <form className="col-md-8 col-md-offset-2" onSubmit={this.onFormSubmit}>
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





    )
  }


}

 // <form className="col-md-8 col-md-offset-2" onSubmit={this.onSubmit(this.state)}>
 //        <div className="text-center">

 //        <h3>Add a New Tenant:</h3>
 //      </div>
 //        <div className="form-group">
 //          <label htmlFor="name">Name</label>
 //          <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name}
 //                onChange={e => this.setState({name: e.target.value})} required />
 //        </div>
 //        <div className="form-group">
 //          <label htmlFor="address">Address</label>
 //          <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address}
 //                onChange={e => this.setState({address: e.target.value})}required />
 //        </div>
 //        <div className="form-group">
 //          <label htmlFor="age">Age</label>
 //          <input type="number" className="form-control" id="age" placeholder="Age" value={this.state.age}
 //                onChange={e => this.setState({age: e.target.value})} />
 //        </div>
 //        <button type="submit" className="btn btn-primary btn-block" >Add Tenant</button>            
 //        </form>

