import React, {Component} from 'react'



export default class Tenant extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {

      console.log('from tenatn',this.props);
      let {name, age, address} = this.props;
    return  (
      <tr>
        <td>{name}</td>
        <td>{address}</td>
        <td>{age}</td>
      </tr>
    )
  }
}