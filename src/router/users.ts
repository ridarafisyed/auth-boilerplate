import express from 'express';

import { getAllUsers, deleteUser, updateUser, getUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';


export default (router: express.Router) => {
    router.get('/users',  getAllUsers);
    router.get('/users/:id', getUser);
    router.delete('/users/:id', deleteUser);
    router.patch('/users/:id', updateUser);
};