import {db } from './db';

export const getOneUser = async (inputEmail) => {

    const connection = await db.getConnection();
    const user = await connection.collection('userdata')
        .findOne({email:inputEmail});
    if(user)    
        return true;
}