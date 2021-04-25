import { ActionsTypes } from '../utils/constants';
import { typeState, ActionsType } from '../models/types';
import { initialState } from '../../core/utils/initialState';

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
        case ActionsTypes.DELETE_ALL_TASKS: 
            return [];
        default:
            return state;
    }
}

export default taskReducer;
