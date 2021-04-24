import uuid from '../utils/generateUUID';

export type Task = {
    id: string;
    date: Date;
    text: string;
    expired: boolean;
};

export const createTask = (): Task => ({
    id: uuid(),
    date: new Date(+new Date + 604800000),
    text: '#Новая задача',
    expired: false,
});
