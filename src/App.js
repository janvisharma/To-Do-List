import React, { Component } from 'react';
import Header from './Components/Header'
import SubmitForm from './Components/SubmitForm'
import ToDoList from './Components/ToDoList'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
// https://medium.com/javascript-in-plain-english/build-a-simple-todo-app-with-react-561579b39ad1

class App extends Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  }

  render(){
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numOfTodo={this.state.tasks.length} />
          <ToDoList tasks={this.state.tasks}/>
        </div>
        
      </div>
      );
  }
}

export default App;
