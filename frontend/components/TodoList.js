import React from 'react'
import Todo from "./Todo"



export default class TodoList extends React.Component {
  
  patch = (id) => {
    return this.props.patch(id)
  }
  
  render() {
    return (
      <ul>
        {this.props.todos.reduce((acc, td) => {
          
          if (this.props.comp || !td.completed) {
            return acc.concat(
             
                <Todo patch={this.props.patch} key={td.id} todo={td} />
            )
          } else {
            return acc
          }
          
        }, [])}
        
       
      </ul>
    )
  }
}
