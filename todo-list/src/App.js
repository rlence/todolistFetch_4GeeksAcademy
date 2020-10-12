import React from 'react';
import './App.css';

import {getAllTodos } from './Api/todos';

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
        console.log(res);
      })
      .catch( err => {
        console.log(err)
      })
  }

  handelKeyDownEvent(e){
    
    if(e.keyCode === 13){
      this.setState({todos:[...this.state.todos, e.target.value]})
    }
  }

  handelClick(index){
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos:todos})
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
                            return <li key={index}> <p>{todo}</p> <p className="hiden"><i onClick={() => this.handelClick(index)} className="fas fa-times"></i></p></li>
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
