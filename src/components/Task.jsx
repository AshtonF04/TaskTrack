import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit, FaCheck } from "react-icons/fa";

import { useState } from "react";

export default function Task({task, UpdateTask, DeleteTask}){
    const [editing, setEditing] = useState(false)
    const [editedName, setEditedName] = useState(task.name)

    return (
    <li className="flex justify-between items-center bg-base-200 p-4 rounded-box shadow-lg">
        {!editing &&
        <div className="flex gap-2 items-center">
            {!editing && <p className="font-bold">{task.name}</p>}
        </div>
        }

        {editing &&
        <div className="w-full mr-8">
            <input 
            className="input w-full" 
            id="EditTaskInput" 
            onChange={(e) => setEditedName(e.target.value)} 
            value={editedName} />
        </div>
        }   

        {!editing &&
        <div className="flex gap-2">
            <button onClick={() => DeleteTask(task.ID)} className="btn btn-sm btn-success btn-square"><FaCheck /></button>
            <button onClick={() => setEditing(true)} className="btn btn-sm bg-base-100 btn-square"><FaRegEdit /></button>
        </div>
        }

        {editing &&
        <div className="flex gap-2">
            <button onClick={() => {
                setEditing(false);
                UpdateTask(task.ID, editedName)
            }} 
            className="btn btn-sm btn-primary btn-square"><FaCheck /></button>
        </div>
        }
    </li>
    );
}