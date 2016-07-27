


var Root= React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      timer: 0,
      interavalId: null
      
    }
  },
  addCount: function() {
    this.setState({
      count: this.state.count + 1
    })
    
    
  },
  decrementCount: function() {
    if(this.state.count > 0) {
    this.setState({
      count: this.state.count - 1
    })
    }
  },

   toggleTimer: function() {
      if (!this.state.interavalId) {
        this.setState({
          interavalId: setInterval(() => {
            this.setState({
              timer: this.state.timer + 1
            })
          }, 1000)
        })
      
    } else {
      if (this.state.interavalId) {

        clearInterval(this.state.interavalId);
        this.setState({
          interavalId: null
        })

      }

    }
  },
  resetTimer: function() {
    clearInterval(this.state.interavalId);
    this.setState({
      interavalId: null,
      timer: 0
    })
  },


  render: function() {
    return (
      <div>
        <h1>Hello from Root Component</h1>
        <h3>Time: {this.state.timer}</h3>
        <button onClick={this.toggleTimer}>{this.state.interavalId ? 'Stop' : 'Start'}</button>
        <button onClick={this.resetTimer}>Reset</button>
        <p>Let's count stuff</p>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    )
  }
})





 ReactDOM.render(
      <Root />,
      document.getElementById('root')
    )