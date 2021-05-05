import React from 'react';
import { useDispatch } from 'react-redux'
import { createTask } from '../../core/models/task'
import { addTask } from '../../core/redux/action';
import './style.css';


const NewTask: React.FC = () => {
    
    const dispatch = useDispatch()

    const inputElement: React.RefObject<HTMLInputElement> = React.createRef()
        
    const addNewTask = () => {
        const input = inputElement.current?.value
        const task = createTask({ text: String(input) });
        dispatch(addTask(task));
    }

    return (
        <div className="new-task">
            <input 
                ref={inputElement}
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
