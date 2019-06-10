import React, { Component } from 'react'

class TodoList extends Component {
  getStyle = (props) => {
      return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.rows.completed ? 'line-through' : 'none'
      }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.rows.id)} /> {' '}
        {this.props.rows.title}
        <button onClick={this.props.delTodo.bind(this, this.props.rows.id)} style={btnStyle}>x</button>
      </div>
    )
  }
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoList
