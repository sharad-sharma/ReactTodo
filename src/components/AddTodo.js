import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    title: ''
  }
  handleOnChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState ({title: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style = {{display: 'flex'}}>
        <input 
          type="text" 
          name="title"
          style = {{flex: '10'}}
          placeholder = "Add Todo..."
          value = {this.state.title}
          onChange = {this.handleOnChange}
        />
        <input 
          type="submit" 
          value="submit"
          className="btn"
          style = {{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
