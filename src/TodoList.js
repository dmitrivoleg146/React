import React from 'react'
import { useEffect,useState } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] =useState([]);
  const [newTask, setNewTask] = useState("");

  const getValue =(event)=>{
     setNewTask(event.target.value);
  }
  const addTask =()=>{
    const task ={
        id: todoList.length === 0 ? 1 : todoList[todoList.length-1] + 1,
        taskName: newTask
    }
    setTodoList([...todoList,task]);
  }
  const deleteTask =(id)=>{
    const newTodoList = todoList.filter((task)=>{
        return task.id !== id ? true : false;
    })
    setTodoList(newTodoList);
  }
  return (
    <div>
        <div className='addTask'>
            <input onChange={getValue}/>
            <button onClick={addTask}>Click me</button>
        </div>
        <div className='list'>
            {todoList.map((task)=>{
                return <div>
                    <h1>{task.taskName}</h1>
                    <button onClick={()=>deleteTask(task.id)}>Remove me</button>
                 </div>
            })}
        </div>
        
    </div>
  )
}

export default TodoList