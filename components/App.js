import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }

}

export default App
