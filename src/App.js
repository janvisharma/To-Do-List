import React, { Component } from 'react';
import Header from './Components/Header'
import SubmitForm from './Components/SubmitForm'
import ToDoList from './Components/ToDoList'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';

// following a tutorial on building a to-do list app with react
// https://medium.com/javascript-in-plain-english/build-a-simple-todo-app-with-react-561579b39ad1

class App extends Component {
  state = {
    tasks: ['Assignment due this weekend', 'Water the plants', 'Zoom call with friends']
  }
  handleDelete = (index) => {
    const updateTasks = Array.from(this.state.tasks)
    // array.splice(index, howmany, item1, ....., itemX)
    updateTasks.splice(index, 1); // delete the element at that index
    this.setState({tasks: updateTasks});
  }
  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  render(){
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numOfTodo={this.state.tasks.length} />
          <SubmitForm onFormSubmit={this.handleSubmit}/>
          <ToDoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
        </div>
        
      </div>
      );
  }
}

export default App;
