import './App.css'
import Tasks from './components/Tasks'

import { useState } from 'react';
import { FaCheck } from "react-icons/fa";

export default function App() {
  const [tasks, setTasks] = useState([])

  function AddTask(){
    const taskInput = document.getElementById("NewTaskInput");
    if (taskInput.value != ""){
      let newID = crypto.randomUUID();
      let taskName = taskInput.value ;

      const task = {ID: newID, name: taskName};
      setTasks([...tasks, task]);

      taskInput.value = "";
    }
  }

  function DeleteTask(ID){
    setTasks(tasks.filter((task) => task.ID != ID));
  }

  function UpdateTask(ID, newTask){
    const updatedTasks = tasks.map((task) => {
      if (task.ID === ID) {
        return { ...task, name: newTask }; // Update the task's name
      }
      return task; // Return the task unchanged if it doesn't match the ID
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="m-auto max-w-screen w-4xl p-8 flex gap-4 flex-col">
      <div className="flex gap-2">
        <input id='NewTaskInput' className="input" placeholder='Enter New Task'></input>
        <button onClick={AddTask} className="btn btn-primary btn-square"><FaCheck /></button>
      </div>


      <div className="flex flex-col gap-2">
        <p className="font-bold text-xl">Tasks:</p>
        {tasks.length > 0 && <Tasks UpdateTask={UpdateTask} DeleteTask={DeleteTask} tasks={tasks}/>}
        {tasks.length <= 0 && <p className="font-bold">Great job, no tasks remaining!</p>}
      </div>

    </div>
  );
}

