import React from 'react';
import './style.css';
import { Task } from '../../core/models/task'

const TaskItem: React.FC<Task> = ({ date, text, id }: Task) => {

    const deleteTask = (event: any) => {
        console.log(event);
    }

    return (
        <div className="task-item">
            <span>{date.toDateString()}</span>
            <p>{text}</p>
            <span className="delete-task" onClick={deleteTask}>❌</span>
        </div>
    );
};



export default TaskItem;
