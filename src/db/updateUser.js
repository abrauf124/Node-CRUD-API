import {db } from './db';
import { ObjectID} from 'mongodb';

export const updateUser = async (user) => {
    const connection = db.getConnection();
    if(user.hash === undefined || user.hash=== null || user.hash===""){
        await connection.collection('userdata')
        .updateOne({_id: ObjectID(user._id) },
            { $set:{
                userName: user.userName,
                phoneNum: user.phoneNum,
            }});  
    }else {
        await connection.collection('userdata')
        .updateOne({_id: ObjectID(user._id) },
            { $set:{
                userName: user.userName,
                phoneNum: user.phoneNum,
                hash: user.hash,
            }});
        
    }
   
}