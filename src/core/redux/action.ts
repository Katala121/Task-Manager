import { AnyAction } from 'redux';
import { ActionsType } from '../models/types';
import { ActionsTypes } from '../utils/constants';

type actionProps = {
    id: string,
    date: Date,
    text: string,
    expired: boolean,
} 

export const addTask = ({ id, date, text }: actionProps): ActionsType => ({
    type: ActionsTypes.ADD_TASK,
    id,
    date,
    text,
    expired: false,
});

export const deleteTask = ({ id }:actionProps): AnyAction => ({
    type: ActionsTypes.DELETE_TASK,
    id,
});