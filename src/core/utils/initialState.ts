import uuid from '../utils/generateUUID';

export const initialState = [
    {
        id: uuid(),
        date: new Date(+new Date - 86400000),
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