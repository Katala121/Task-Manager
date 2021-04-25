import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteAllTasks } from '../../core/redux/action';
import './style.css';

const ButtonClearAll: React.FC = () => {

    const dispatch = useDispatch();

    const ClearAll = () => {
        dispatch(deleteAllTasks())
        console.log('clear all tasks')
    }

    return (
        <div className="button-clear-all-wrapper">
            <div className="button-clear-all" onClick={ClearAll}>
                <span>Clear All</span>
            </div>
        </div>
    );
};



export default ButtonClearAll;