


var Root= React.createClass({

  getInitialState: function() {
    return {
      counters: {
        one: 0,
        two: 0
      },
      timer: 0,
      interavalId: null
      
    }
  },
  addCount: function(arg, event) {
    // e.persist();

    let counters = Object.assign({}, this.state.counters); //shallow copy of the object

    counters[arg] += 1;

    // this.state.counters[arg] += 1;

    this.setState({
      counters: counters
    })
    
    
  },
  decrementCount: function(arg, event) {
    
     
    if(this.state.counters[arg] > 0) {
    // this.state.counters[arg] -= 1;
    let counters = Object.assign({}, this.state.counters);
    counters[arg] -= 1;
    this.setState({
      counters: counters
    })
    }
  },


  render: function() {
    return (
      <div>
        <h1>Hello from Root Component</h1>
        <h3>Counter 1: {this.state.counters.one}</h3>
        <button id='1' onClick={this.addCount.bind(this, 'one')}>+</button>
        <button onClick={this.decrementCount.bind(this, 'one')}>-</button>

        <h3>Counter 2: {this.state.counters.two}</h3>
        <button id='2' onClick={this.addCount.bind(this, 'two')}>+</button>
        <button onClick={this.decrementCount.bind(this, 'two')}>-</button>        
      </div>
    )
  }
})





 ReactDOM.render(
      <Root />,
      document.getElementById('root')
    )