import { Task } from './task'
import { ActionsTypes} from '../utils/constants'

export type typeState = Task[];

export type Store = {
    taskReducer: typeState,
}

interface AddTaskAction {
    type: ActionsTypes.ADD_TASK,
    id: string,
    date: Date,
    text: string,
    expired: boolean,
}

interface DeleteTaskAction {
    type: ActionsTypes.DELETE_TASK,
    id: string,
}

export type ActionsType = AddTaskAction | DeleteTaskAction;