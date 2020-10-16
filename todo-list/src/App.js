import React,{useContext, useEffect, useState} from 'react';
import './App.css';
import {Context} from './store/appContext';
import injectContext from './store/appContext';

//import {getAllTodos, createNewTodoList, createAndDeleteTodo } from './Api/todos';

function App(props) {
  
  const { store, actions } = useContext(Context);
  const [reload, setReload] = useState(false);
  const [state, setState] = useState('');


  useEffect(
    ()=>{
      console.log('reolad')
      loadingData();
    },[reload]
  )

  const loadingData = ()=>{
    actions.loadSomeData();
  }

  const handelKeyDownEvent = async (e) => {
    if(e.keyCode === 13){
      const uid = Math.floor(Math.random() * 999999);
      const todo = { todo:state, check:false , id:uid};
      const res = await actions.addTodo(todo);
      if(res){
        setState('')
        setReload(!reload);
      }
    }
  }

  const handelClick = async (e)=>{
    const res = await actions.deleteTodo(e);
    console.log(res);
    if(res === true){
      setReload(!reload);
    }
  }

 
    return (
        <div className="container">
            <div className="todo">
                <h1>TODO</h1>
                <div className="card-todos">
                      <input type="text" className="input-text" onKeyDown={handelKeyDownEvent} onChange={ e => setState(e.target.value)} value={state}   name="todo" />
                      <ul>
                        {store.todos.length > 0 ? 
                          store.todos.map( (todo, index) => {
                            return <li key={todo.id}> <p>{todo.todo}</p> <p className="hiden"><i onClick={() => handelClick(todo.id)} className="fas fa-times"></i></p></li>
                          })
                          :
                          <li> <p>Without tasks, add a task</p> </li>
                          
                        }
                      </ul>
                      <div className="total-iteam">
                        <p>{store.todos.length} iteams left</p>
                      </div>
                </div>
            </div>
        </div>
    );
}

export default injectContext(App);
