import React, { Component } from 'react'
import Tenant from './Tenant'
import TenantForm from './TenantForm'
import uuid from 'uuid'

import TenantStore from '../stores/TenantStore'
import TenantActions from '../actions/TenantActions'

let _getComponentState = () => {
  return {
    tenants: TenantStore.getAllTenants()
  };
};


export default class Tenants extends Component {
  constructor(props) {
    super(props);

    this.state = _getComponentState();
    // console.log(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.deleteTenant = this.deleteTenant.bind(this);
    this._onChange = this._onChange.bind(this);
    
  }
  componentWillMount() {
    TenantActions.getAllTenants(this._onChange);
  }

  componentDidMount() {
    
    TenantStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TenantStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('7. In Tenants component, updating state', this);
    this.setState(_getComponentState());
  }

  // onSubmit(newTenant) {
  //   // console.log('new this',this);
  //   console.log('onSubmit');
  //   newTenant.id = uuid();
  //   console.log('newTenant', newTenant);
  //   this.setState({tenants: this.state.tenants.concat([newTenant])});
  //   // console.log('tenants after add',this.state.tenants);
    
  // }

  deleteTenant(id) {
    console.log('id delete',id);
    TenantActions.deleteTenant(id);
    // this.setState({tenants: this.state.tenants.filter((tenant) => tenant.id !== id )});
  }

  render() {
    return (
      <div>
        <p>Hi from tenants</p>
        <div>
        <TenantForm onSubmit={this.onSubmit} />
       </div>
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.state.tenants.map(tenant => {
              // console.log('map',tenant);
              tenant.deleteTenant = this.deleteTenant;
              console.log('ten map', tenant);
              return <Tenant {...tenant} key={tenant._id}/>
            })}
          </tbody>
        </table>
             
        </div>
    )
  }
}
