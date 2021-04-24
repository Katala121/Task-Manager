import React from 'react';
import './style.css';
import { Task } from '../../core/models/task'

const TaskItem: React.FC<Task> = ({ date, text }: Task) => {

    return (
        <div className="task-item">
            <span>{date.toDateString()}</span>
            <p>{text}</p>
            <span>❌</span>
        </div>
    );
};



export default TaskItem;
