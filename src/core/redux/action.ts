import { AnyAction } from 'redux';
import { ActionsType } from '../models/types';
import { ActionsTypes } from '../utils/constants';

type addTaskActionProps = {
    id: string,
    date: Date,
    text: string,
    expired: boolean,
}

type deleteTaskActionProps = {
    id: string,
} 

export const addTask = ({ id, date, text }: addTaskActionProps): ActionsType => ({
    type: ActionsTypes.ADD_TASK,
    id,
    date,
    text,
    expired: false,
});

export const deleteTask = ({ id }: deleteTaskActionProps): ActionsType => ({
    type: ActionsTypes.DELETE_TASK,
    id,
});