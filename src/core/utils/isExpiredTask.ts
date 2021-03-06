import { typeState } from '../models/types';

export const isExpiredTask = (state: typeState): typeState => {
    return state.map(task => {
        if (new Date(task.date) >= new Date()) return task;
        else {
            task.expired = true;
            return task;
        } 
    });
};