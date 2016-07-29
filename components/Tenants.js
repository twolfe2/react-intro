import React, { Component } from 'react'
import Tenant from './Tenant'
import TenantForm from './TenantForm'
import uuid from 'uuid'



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

  onSubmit(newTenant) {
    // console.log('submit clicked', this.state);
    // let newTenant = {
    //   name: this.state.name,
    //   address: this.state.address,
    //   age: this.state.age
    // };
     
    // console.log('new tenant',newTenant);
    this.setState({tenants: this.state.tenants.concat([newTenant])});
    // console.log('tenants after add',this.state.tenants);
      
    
    
    
  }

  render() {
    return (
      <div>
        <p>Hi from tenants</p>

        <TenantForm onSubmit={this.onSubmit} />
       
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.state.tenants.map(tenant => {
              console.log('map',tenant);
              return <Tenant {...tenant} key={uuid()} />
            })}
          </tbody>
        </table>
             
        </div>
    )
  }
}
