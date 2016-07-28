var Welcome = React.createClass({
  render: function() {
    // console.log(this.props);
    let {greeting, info} = this.props;

    return (
      <div>
        <h1>{greeting}</h1>
        <p>{info}</p>
      </div>

      )
  }
})


var Counter = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    let {minusCount, count, num, addCount} = this.props;
    // console.log(this.props.num);
   return (
    <div>
        <h3>Counter {num}: {count}</h3>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
    </div>

    )
}
});

var Message = React.createClass({
  render: function() {
    console.log(this.props);
    let {message, deleteMessage, id} = this.props;
    return(
    <li>
      {message}
      <button onClick={() => deleteMessage(id)}>Delete</button>
    </li>
    )
  }
})


var MessageForm = React.createClass({
  getInitialState: function() {
    return {
      message: ''
    }
  },
  onAddMessage: function() {
    let {addMessage} = this.props;
    let message = this.state.message;
    addMessage(message);
  },
  render: function() {
    return (
      <div>
        <input type="text" 
        value= {this.state.message}
        onChange={e => this.setState({message: e.target.value})}
        />
        <button onClick={this.onAddMessage}>Submit</button>
        <p>{this.state.message}</p>
      </div>
      )
  }
})

var Root= React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      messages: []
    }
  },
  addMessage: function(message) {
    console.log(message);
    let newMessage = {
      message: message,
      id: uuid()
    }
    // let newArr = this.state.messages.slice(0);
    // newArr.push(message);
    this.setState({messages: this.state.messages.concat(newMessage)});

  },
  deleteMessage: function(id) {
    this.setState({messages: this.state.messages.filter(message => message.id != id)})
  },
  addCount: function() {
    this.setState({ count: this.state.count + 1})
  },
  minusCount: function() {
    this.setState({ count: this.state.count - 1})
  },

  render: function() {
    let message = {
      greeting: "Hello World",
      info: "Let's count stuff"
    }
    let count = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      count: this.state.count
    }
      console.log(this.state);
      let messages = this.state.messages.map((message, i) => {
        return <Message key={message.id} {...message} deleteMessage={this.deleteMessage} />
      })

    return (
      <div>
        <Welcome {...message}/>

        <MessageForm addMessage = {this.addMessage} />
        <ul>
          {messages}
        </ul>
        <Counter {...count} num={1}/>
        <Counter {...count} num={2}/>
        <Counter {...count} num={3}/>         
      </div>
    )
  }
})

 ReactDOM.render(
      <Root />,
      document.getElementById('root')
    )