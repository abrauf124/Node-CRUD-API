import { checkValidation, getUsers , insertUser} from "../db";
import  bcrypt  from 'bcryptjs';

export const addUserRoute = {
    method: "post",
    path: '/users',
    handler: async (req, res) =>{
        const { userName , phoneNum, email, password, } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = {
            userName,
            phoneNum,
            email,
            hash,
        };
        const validateUser = {
            userName,
            phoneNum,
            email,
            password,
        };
        const validationErr = await checkValidation(validateUser,false);
        const error = {...validationErr};

        if(error.name==="" && error.phoneNum ==="" && error.email==="" && error.password ==="" ){
            await insertUser(newUser);
            res.status(200).json('ok');
        } else {
            res.status(406).json(error);
        }
    },
};