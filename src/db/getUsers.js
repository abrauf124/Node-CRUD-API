import {db } from './db';

export const getUsers = async () => {

    const connection = await db.getConnection();
    const users = await connection.collection('userdata')
        .find({}).toArray();
    return users;
}