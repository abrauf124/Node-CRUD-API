import {getOneUser} from './getOneUser';
import { checkPassword } from './checkPassword';
export const checkValidation = async (inputValues, isToUpdate) => {

      const errors = {
        name: "",
        phoneNum: "",
        email: "",
        password: "",
        
        
      }
          //first Name validation
          if (!inputValues.userName.trim()) {
            errors.name = "name is required";
          } else {
            errors.name = "";
          }
          //mobile number validation
          if (!inputValues.phoneNum.trim()) {
            errors.phoneNum = "Mobile number is required";
          } else if(inputValues.phoneNum.length !==10){
            errors.phoneNum = "Mobile Number must be 10 digits"
          } else {
            errors.phoneNum  = "";
          }
      
          // email validation
          const emailCond =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[A-Z]{2,4}$/i;
          const accExist= await getOneUser(inputValues.email);  
          if (!inputValues.email.trim()) {
            errors.email = "Email is required";
          } else if (!inputValues.email.match(emailCond)) {
            errors.email = "Please ingress a valid email address";
          } else if (accExist){
            errors.email = "Account with the email already exists"
          } else {
            errors.email = "";
          }
      
          //password validation
          const cond1 = /^(?=.*[a-z]).{6,20}$/;
          const cond2 = /^(?=.*[A-Z]).{6,20}$/;
          const cond3 = /^(?=.*[0-9]).{6,20}$/;
          const password = inputValues.password;
          if (!password) {
            errors.password = "password is required";
          } else if (password.length < 6) {
            errors.password = "Password must be longer than 6 characters";
          } else if (password.length >= 20) {
            errors.password = "Password must shorter than 20 characters";
          } else if (!password.match(cond1)) {
            errors.password = "Password must contain at least one lowercase";
          } else if (!password.match(cond2)) {
            errors.password = "Password must contain at least one capital letter";
          } else if (!password.match(cond3)) {
            errors.password = "Password must contain at least a number";
          } else {
            errors.password = "";
          }
          
          // checkPassword 

          if(isToUpdate){
              const crctPassWord = await checkPassword(inputValues._id,inputValues.password)
              if(!crctPassWord && inputValues.password !=='Admin@123'){
                errors.password= "Incorrect Password";
              }else {
                errors.password="";
              }
          }

          // if (!inputValues.confirmPassword) {
          //   errors.confirmPassword = "Password confirmation is required";
          // } else if (inputValues.confirmPassword !== inputValues.password) {
          //   errors.confirmPassword = "Password does not match confirmation password"; 
          // } else {
          //   errors.confirmPassword = "";
          // }
      
         
        return errors;
          
        };