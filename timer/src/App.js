import React from 'react';
import TodoList from './ToDoComponents/TodoList';
import TodoForm from './ToDoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        //task: '',
        //id: '',
        //completed: false,
      }],
      todo: ''
    }
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList
          todos={this.state.todos}/>
        <TodoForm
          todos={this.state.todos}/>  
      </div>
    );
  }
}

export default App;
