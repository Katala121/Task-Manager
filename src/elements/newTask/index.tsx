import React from 'react';
import { useDispatch } from 'react-redux'
import { createTask } from '../../core/models/task'
import { addTask } from '../../core/redux/action';
import './style.css';


const NewTask: React.FC = () => {
    
    const dispatch = useDispatch();
    
    
    const addNewTask = () => {
        const input = document.querySelector('input')
        const task = createTask({ text: String(input?.value) });
        dispatch(addTask(task));
    }

    return (
        <div className="new-task">
            <input 
                type="text"
                placeholder="Enter new task"
                maxLength={120}
                size={50}>
            </input>
            <div className="button-add-task" onClick={addNewTask}>
                <span>Add new task</span>
            </div>
        </div>
    );
};



export default NewTask;
