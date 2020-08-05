import React, {Component} from 'react';

import Indicator from './components/Indicator/Indicator.js';

import Form from './components/Form/Form.js';

import ToDoList from './components/ToDoList/ToDoList.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      lists: [
        { task: 'task1', id: 1 },

        { task: 'task2', id: 2 },

        { task: 'task3', id: 3 }
      ],

      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    let list;
    e.preventDefault();
    if (this.state.input === '') {
      return;
    } else {
     list = {task: this.state.input, id:this.state.lists.length + 1};
    };

    this.setState({ lists: [...this.state.lists, list], input: '' });
    document.getElementById('myForm').reset();
  }

  handleDelete = (index) => {
    const filteredList = this.state.lists.filter(list => {
      return list.id !== index;
    })
    this.setState({lists: filteredList})
  }

  render () {
    return (
      <div className='App'>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}/>

        <ToDoList  lists={this.state.lists} onDelete={this.handleDelete}/>

        <Indicator  number={this.state.lists.length}/>
      </div>
      
    )
  }
}

export default App;