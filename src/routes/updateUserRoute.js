import {  updateUser, checkValidation} from '../db';
import bcrypt from 'bcryptjs';

export const updateUserRoute = {
    method: "put",
    path: '/users/',
    handler: async (req, res) =>{
        const { _id, userName , email, phoneNum, password,newPassword, checked} = req.body;
        const hash = await bcrypt.hash(newPassword, 10);
        const newWithoutPassword = {
            _id,
            userName,
            phoneNum,
        }
        const newData = {
            _id,
            userName,
            phoneNum,
            hash,
        };
        const validateUser = {
            _id,
            userName,
            email,
            phoneNum,
            password,
        };
        const validationErr = await checkValidation(validateUser, true);
        const error = {...validationErr};
        if(!checked && error.name==="" && error.phoneNum ==="" && error.password ===""){
            await updateUser(newWithoutPassword);
            res.status(200).json('ok');
        } else if(checked && error.name==="" && error.phoneNum ==="" && error.password ==="" ){
            await updateUser(newData);
            res.status(200).json('ok');
        } else {
            res.status(406).json(error);
        }
    },
};