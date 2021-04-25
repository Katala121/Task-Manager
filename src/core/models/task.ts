import uuid from '../utils/generateUUID';

export type Task = {
    id: string;
    date: Date;
    text: string;
    expired: boolean;
};

type createTaskProps = {
    text: string,
}

export const createTask = ({ text }: createTaskProps): Task => ({
    id: uuid(),
    date: new Date(+new Date + 604800000),
    text: text,
    expired: false,
});
