import { AnyAction } from 'redux';
import c from '../utils/constants';
import { typeState } from '../models/types';
import { Reducer } from 'react';
import uuid from '../utils/generateUUID';

const initialState = [
    {
        id: uuid(),
        date: new Date(),
        text: 'Implementation testing application',
        expired: false,
    },
    {
        id: uuid(),
        date: new Date(+new Date + 86400000),
        text: 'Deploying testing application',
        expired: false,
    },
];

function taskReducer(state: typeState = initialState, action: AnyAction): typeState {
    switch (action.type) {
        case c.ADD_TASK: 
            return [
                    ...state,
                    {
                        id: action.id,
                        date: action.date,
                        text: action.text,
                        expired: action.expired,
                    }
                ]
        case c.DELETE_TASK: 
            return state.filter( c => c.id !== action.id);
        default:
            return state;
    }
}

export default taskReducer;
