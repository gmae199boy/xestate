import {
    readLessor,
    createLessor,
    deleteLessor,
    updateLessor,
    loginLessor,
} from './ctrl/lessor.ctrl';
import { createLessorSchema } from './schema/lessorSchema';

const routes = [
    {
        method: 'POST',
        url: '/lessor/signup',
        handler: createLessor,
        schema: createLessorSchema,
    },
    {
        method: 'POST',
        url: '/lessor/login',
        handler: loginLessor,
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
