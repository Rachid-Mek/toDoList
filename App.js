import './App.css';
import { useState } from 'react';
import {Task} from './Task';

function App() {
  const [toDoList,setToDo] = useState([]);
  const [newTask,setNewTask] = useState("");
  const handleChanges = (e) => {
    setNewTask(e.target.value);
  }
  const addTask = () => {
    const task = {
      id: toDoList.length=== 0 ? 1 : toDoList[toDoList.length-1].id + 1 ,
      taskName: newTask,
      completed: false,
    }
    setToDo([...toDoList, task]);
  }

  const deleteTask = (id) => {
    setToDo(toDoList.filter((item) => item.id !== id)); //filter out the task to be deleted from the list
  }

  const completeTask = (id) => {
    setToDo(toDoList.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }
  //display the task
return (
  <div className='App'>
    <label for='task'>Task </label>

    <input id='task' type='text' onChange={handleChanges} />

    <button onClick={addTask}>Submit</button>

    {/* display the task */}
     {toDoList.map((task) => {
     return <Task taskName = {task.taskName} id = {task.id} deleteTask={deleteTask} completeTask={completeTask} completed={task.completed} />
    })}
  </div>
  );
}

export default App;
