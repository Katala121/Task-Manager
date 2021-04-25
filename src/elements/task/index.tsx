import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../core/redux/action';
import './style.css';
import { Task } from '../../core/models/task';
import { cutText } from '../../core/utils/cutText';

const TaskItem: React.FC<Task> = ({ date, text, id, expired }: Task) => {

    const dispatch = useDispatch();

    const deleteTaskItem = (event: any) => {
        const id = event.target.closest('.task-item').getAttribute('data-id');
        dispatch(deleteTask({ id: String(id) }));
    }

    if (expired) {
        return (
            <div className="task-item expired" data-id={id}>
                <span>{date.toDateString()}</span>
                <p>{cutText(text)}</p>
                <span className="delete-task" onClick={deleteTaskItem}>❌</span>
            </div>
        );
    } else {
        return (
            <div className="task-item" data-id={id}>
                <span>{date.toDateString()}</span>
                <p>{cutText(text)}</p>
                <span className="delete-task" onClick={deleteTaskItem}>❌</span>
            </div>
        );
    }
};



export default TaskItem;
