const {
    addBookHandler,
    getAllBookHandler,
    getBookByIdHandler,
    editBookbyIdHandler,
    deleteBookByIdHandler
} = require('./handler');

const routes = [
    {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
        cors: {
        origin: ['*'],
        },
    },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookbyIdHandler
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler
    }
]
module.exports = routes;