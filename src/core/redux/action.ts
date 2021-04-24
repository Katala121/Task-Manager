import { AnyAction } from 'redux';
import c from '../utils/constants';

type actionProps = {
    id: string,
    date: Date,
    text: string,
    expired: boolean,
} 

export const addTask = ({ id, date, text }: actionProps): AnyAction => ({
    type: c.ADD_TASK,
    id,
    date,
    text,
    expired: false,
});

export const deleteTask = ({ id }:actionProps): AnyAction => ({
    type: c.DELETE_TASK,
    id,
});