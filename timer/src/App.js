import React from 'react';

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
        <h1>app</h1>
      </div>
    );
  }
}

export default App;
