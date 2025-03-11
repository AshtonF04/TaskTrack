import Task from "./Task";

export default function Tasks({tasks, UpdateTask, DeleteTask}){
    return (
        <>
            <ul className="list flex flex-col gap-4">
                {tasks.map((task) => <Task key={task.ID} UpdateTask={UpdateTask} DeleteTask={DeleteTask} task={task}/>)}
            </ul>
        </>
    );
}