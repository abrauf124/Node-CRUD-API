import {db } from './db';


export const insertUser = async (user) => {
    
    const connection = db.getConnection();
    await connection.collection('userdata')
        .insertOne(user);
}