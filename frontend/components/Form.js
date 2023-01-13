import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

change = (e) => {
  const {name, value} = e.target
  this.setState({...this.state, [name]: value})
}

onSub = (e) => {
  
  const newTodo = this.state 
  this.props.sub(newTodo)
  this.setState({name: ''})
}
  render() {
    return (

      <form onSubmit={this.onSub}>
      <label>Enter Task
        <input type="text" name='name' value={this.state.name} onChange={this.change} />
      </label>       
      <input type="submit" value="Add Task" />
    </form>
      )
  }
}
