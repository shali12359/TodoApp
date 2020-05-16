import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import MyList from './components/MyList';
import InfoArea from './components/InfoArea';
import MyForm from './components/MyForm';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

// Import react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import uuid
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
      todos: [],
      id: uuidv4(),
      todo: '',
      editTodo: false,                  // For check whether todo is edited or nor
      completed: false                  // For check whether todo is completed or nor
  };

  // Look for changes of input field
  handleChange = e => {
      this.setState({
        todo: e.target.value
      });
  }

  // Add a new todo
  addTodo = e => {
    // Prevent refresh the page
    e.preventDefault();

    // Create a new todo
    const newTodo = {
      id: this.state.id,
      title: this.state.todo,
      completed: this.state.completed
    };

    // Array for store new todo and older todos
    const allTodos = [ newTodo, ...this.state.todos];

    // Change the state with new todos
    this.setState({
      todos: allTodos,
      todo: '',
      id: uuidv4(),
      editTodo: false,
      completed: false
    });
  }

  // Delete a todo
  deleteTodo = (id) => {
    // Filter other todos
    const filterTodo = this.state.todos.filter(todo => todo.id != id);

    // Pass filtered todos to state
    this.setState({
      todos:filterTodo
    });
  }

  // Upadate a todo
  updateTodo = (id) => {
    // Filter other todos
    const filterTodo = this.state.todos.filter(todo => todo.id != id);

    // Get selected todo to edit
    const selectedTodo = this.state.todos.find(todo => todo.id === id);

    // Pass filtered todos & edited todo to state
    this.setState({
      todos: filterTodo,
      todo: selectedTodo.title,
      editTodo: true,
      id: id
    });
  }

  // Change completed icon when clicked
  changeCompleted = (id) => {
    this.setState ({ todos: this.state.todos.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })})
  }

  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ InfoArea }/>
            <Route path="/about" component={ About } />
          </Switch>
          <MyForm todo={ this.state.todo } addTodo={ this.addTodo } handleChange={ this.handleChange } editTodo={ this.state.editTodo }/>
          <MyList todos={ this.state.todos } deleteTodo={ this.deleteTodo } updateTodo={ this.updateTodo } changeCompleted={ this.changeCompleted }/>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}
