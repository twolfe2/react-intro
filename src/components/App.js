import React, { Component } from 'react'
import Welcome from './Welcome'
import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">

           {this.props.children}
        </div>
        
      </div>)
  }
}

// export default () => (
//     <div>
//       <h1>Hello from welcome 2</h1>
//     </div>
//   )
