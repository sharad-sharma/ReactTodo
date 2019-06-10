import React, { Component } from 'react'
import TodoList from './TodoList'

class Todo extends Component {
  
  render() {
    const row = [];
    this.props.name.forEach((todo) => {
      row.push(<p><TodoList delTodo={this.props.delTodo} markComplete={this.props.markComplete} key={todo.id} rows={todo} /></p>)
    })
    return (
      <div>
        {row}
      </div>
    )
  }
}

export default Todo
