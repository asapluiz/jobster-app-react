
import { responseUser, UserlocalStorageType } from "../redux store/reduxTypes";


export const addUserToLocalStorage = (user:UserlocalStorageType)=>{
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocalStorage = ():UserlocalStorageType | null =>{
  let user = localStorage.getItem('user');
  let decodedUser = user? JSON.parse(user) as UserlocalStorageType : null;
  return decodedUser;
}

export const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user');
}
