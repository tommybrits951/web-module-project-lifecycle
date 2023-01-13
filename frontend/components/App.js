import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"
import axios from "axios"


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [   
      ],
      displayCompleteds: true

    }
  }
  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      this.setState({...this.state, todos: res.data.data})
      console.log(this.state.todos)
    })
    .catch(err => console.error(err))

  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  postTodo = (todo) => {
    axios.post(URL, todo)
    .then(res => {
      this.setState({...this.state, todos: [...this.state.todos, todo]})
      console.log(this.state.todos)

    })
    .catch(err => console.error(err))
  }
  patchTodo = id => {
    axios.patch(`${URL}/${id}`)
    .then(res => {
      this.setState({...this.state, todos: this.state.todos.map(td => {
        if (td.id !== id) {
          return td
        } else {
          return res.data.data
        }
      })})
    })
    .catch(err => console.error(err))
  }

clear = (e) => {
  e.preventDefault()
  this.setState({...this.state, displayCompleteds: !this.state.displayCompleteds})
}

  render() {
    return (
      <div>
        <TodoList patch={this.patchTodo} comp={this.state.displayCompleteds} todos={this.state.todos}/>
        <Form sub={this.postTodo}/>
        <button onClick={this.clear}>{this.state.displayCompleteds === true ? "Hide" : "Show"} Completed</button>
      </div>
    )
  }
  }

