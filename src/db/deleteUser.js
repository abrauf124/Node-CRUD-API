import { ObjectID} from 'mongodb';
import { db } from './db';

export const deleteUser = async (userId) => {
    const connection = db.getConnection();
    await connection.collection('userdata')
        .deleteOne({ _id: ObjectID(userId) });
}