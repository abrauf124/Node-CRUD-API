import { deleteUser, getUsers } from '../db';

export const deleteUserRoute = {
    method: "delete",
    path: '/users/:id',
    handler: async (req, res) =>{
        const { id } = req.params;
        await deleteUser(id);
        const updatedUsers = await getUsers();
        res.status(200).json(updatedUsers);

    },
};