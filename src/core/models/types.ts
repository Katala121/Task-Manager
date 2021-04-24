import { Task } from './task'

export type typeState = Task[];

export type Store = {
    taskReducer: typeState,
}