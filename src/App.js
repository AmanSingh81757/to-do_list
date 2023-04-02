import './App.css';
import {useState} from 'react'

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handeleChange=(e)=>{
    setNewTask(e.target.value);
  }

  const addTask=()=>{
    const task = {
      id: todoList.length===0?1:todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newList = [...todoList, task]
    setTodoList(newList);
  }

  const deleteTask=(idToDelete)=>{
    setTodoList(todoList.filter((name)=> name.id===idToDelete?false:true))
  }

  const completeTask=(idToComplete)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id===idToComplete){
        task.completed=true;
      }
      return task;
    }))
  }

  return (
    <div className="App">
      <div className="inputTask">
        <div>
          <input onChange={handeleChange}></input>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="taskList">
      {todoList.map((elem)=>{
        return (
          <div className='task' style={{backgroundColor: elem.completed?"#1cff42":"white"}}>
            <h1>{elem.taskName}</h1>
            <button onClick={()=>completeTask(elem.id)}>Task Complete</button>
            <button onClick={()=>deleteTask(elem.id)}>Remove Task</button>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
