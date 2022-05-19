import { addUserRoute } from "./addUserRoute";
import { deleteUserRoute } from "./deleteUserRoute";
import {getUsersRoute} from './getUsersRoute';
import {updateUserRoute} from './updateUserRoute';


export const routes = [
    addUserRoute,
    deleteUserRoute,
    getUsersRoute,
    updateUserRoute,
];