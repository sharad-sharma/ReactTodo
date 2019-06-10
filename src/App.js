import React, { Component } from 'react';
import './App.css'
import Todo from './components/Todo'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          title: "Listening songs",
          completed: false
        },
        {
          id: 2,
          title: "Downloading songs",
          completed: true
        },
        {
          id: 3,
          title: "Listening songs",
          completed: false
        }
      ]
    }
  }
  markComplete = (id) => {
    this.setState ({
      todo: this.state.todo.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  // To delete
  delTodo = (id) => {
    this.setState({
      todo: [...this.state.todo.filter((todo) => todo.id !== id)]
    })
  }
  addTodo = (text) => {
    const newTodo = {
      id: this.state.todo.length+1,
      title: text,
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todo name={ this.state.todo } markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App
