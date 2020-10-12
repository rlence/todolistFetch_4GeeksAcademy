import React from 'react';
import './App.css';

import {getAllTodos, createNewTodoList, createAndDeleteTodo } from './Api/todos';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos:[],
    }

    this.handelKeyDownEvent = this.handelKeyDownEvent.bind(this);
    this.handelClick = this.handelClick.bind(this)
  }

  componentWillMount(){

      getAllTodos()
      .then( res => {
        return res.json();
      })
      .then( data => {
        console.log(data)
        this.setState({todos:data})
      })
      .catch( err => {
        console.log(err)
      })
  }

  handelKeyDownEvent(e){
    
    if(e.keyCode === 13){
      const todos = this.state.todos;
      todos.push({label:e.target.value, done:false});

      createAndDeleteTodo(todos)
      .then( res => {
        this.setState({todos:todos})
        return res.json()
      })
      .then( data => {
        console.log(data)
      })
      .catch( err => {
        console.log(err)
      })
    }
  }

  handelClick(index){
    const todos = this.state.todos;
    todos.splice(index, 1);
    createAndDeleteTodo(todos)
      .then( res => {
        this.setState({todos:todos})
        return res.json()
      })
      .then( data => {
        console.log(data)
        this.setState({todos:todos})
      })
      .catch( err => {
        console.log(err)
      })
    
  }

  render(){

    return (
        <div className="container">
            <div className="todo">
                <h1>TODO</h1>
                <div className="card-todos">
                      <input type="text" className="input-text" onKeyDown={this.handelKeyDownEvent}  name="todo" />
                      <ul>
                        {this.state.todos.length > 0 ? 
                          this.state.todos.map( (todo, index) => {
                            return <li key={index}> <p>{todo.label}</p> <p className="hiden"><i onClick={() => this.handelClick(index)} className="fas fa-times"></i></p></li>
                          })
                          :
                          <li> <p>Without tasks, add a task</p> </li>
                          
                        }
                      </ul>
                      <div className="total-iteam">
                        <p>{this.state.todos.length} iteams left</p>
                      </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
