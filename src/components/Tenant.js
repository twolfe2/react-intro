import React, {Component} from 'react'
import TenantActions from '../actions/TenantActions'


export default class Tenant extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: this.props.name,
      address: this.props.address,
      age: this.props.age,
      _id: this.props._id,
      editing: false
    }

    this.editTenant = this.editTenant.bind(this);
  }
  editTenant() {
    if(this.state.editing) {
      let editObj = {
        _id: this.state._id,
        name: this.state.name,
        address: this.state.address,
        age: this.state.age
      }
      TenantActions.editTenant(editObj);

      this.setState({editing: !this.state.editing});

    } else {
        this.setState({editing: !this.state.editing});
    }
  }

  render() {

      // console.log('from tenant',this.props);
      let { _id, deleteTenant} = this.props;
      // console.log('deleteTenant tenant', dele);
      let name = this.state.editing ? <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} /> : this.state.name
      let address = this.state.editing ? <input value={this.state.address} onChange={e => this.setState({address: e.target.value})} /> : this.state.address
      let age = this.state.editing ? <input value={this.state.age} onChange={e => this.setState({age: e.target.value})} /> : this.state.age
    return  (
      <tr>
        <td>{name}</td>
        <td>{address}</td>
        <td>{age}</td>
        <td>
          <button onClick= {() => deleteTenant(_id)}>Delete</button>
          <button onClick={this.editTenant}>{this.state.editing ? 'Confirm' : 'Edit'}</button>

        </td>
      </tr>
    )
  }
}