import { ActionsTypes } from '../utils/constants';
import { typeState, ActionsType } from '../models/types';
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
    {
        id: uuid(),
        date: new Date(+new Date + 86900000),
        text: 'Send testing application',
        expired: false,
    },
];

function taskReducer(state: typeState = initialState, action: ActionsType): typeState {
    switch (action.type) {
        case ActionsTypes.ADD_TASK: 
            return [
                    ...state,
                    {
                        id: action.id,
                        date: action.date,
                        text: action.text,
                        expired: action.expired,
                    }
                ]
        case ActionsTypes.DELETE_TASK: 
            return state.filter( c => c.id !== action.id);
        default:
            return state;
    }
}

export default taskReducer;
