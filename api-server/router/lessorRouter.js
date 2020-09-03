import {
    readLessor,
    createLessor,
    deleteLessor,
    updateLessor,
} from './ctrl/lessor.ctrl';

const routes = [
    {
        method: 'POST',
        url: '/lessor/create',
        handler: createLessor,
    },
    {
        method: 'GET',
        url: '/lessor/:name',
        handler: readLessor,
    },
    {
        method: 'DELETE',
        url: '/lessor/:name',
        handler: deleteLessor,
    },
    {
        method: 'PUT',
        url: '/lessor/:name',
        handler: updateLessor,
    },
]

export default routes;
