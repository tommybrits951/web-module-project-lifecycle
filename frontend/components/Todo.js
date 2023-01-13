import React from 'react'

export default class Todo extends React.Component {
  
  clickMe = (e) => {
    const {id} = e.target
    this.props.patch(id)
  }
  render() {
    return (
      <div id={this.props.todo.id} onClick={this.clickMe} key={this.props.todo.id}>
        {this.props.todo.name}{this.props.todo.completed ? '✔️' : ''}
      </div>
    )
  }
}
