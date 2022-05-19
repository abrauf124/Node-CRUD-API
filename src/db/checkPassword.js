import bcrypt from "bcryptjs";
import { ObjectID} from 'mongodb';
import {db} from './db';
export const checkPassword = async (inputId, password) => {

    const connection = await db.getConnection();
    const user = await connection.collection('userdata')
        .findOne({_id: ObjectID(inputId) });
    const hash = user.hash;
    const isCrctPassword= await bcrypt.compare(password, hash);

    return isCrctPassword;


}