
export interface responseUser{
  user:{
    email: string,
    lastName: string,
    location: string,
    name: string,
    token: string
  }
} 

export interface UserlocalStorageType{
  email: string,
  lastName: string,
  location: string,
  name: string,
  token: string
}
export interface ErrorResponse {
  response?: {
    data?: {
      msg?: string;
    };
  };
}

export interface userStateType{
  closeNav:boolean
  isLoading: boolean;
  user: UserlocalStorageType | null
}

export interface registerUserType{
  name:string;
  email:string;
  password:string;
}

export interface loginUserType{
  email:string;
  password:string;
}

export interface updateUserType{
  name?: string,
  email?: string,
  lastName?: string,
  location?: string,
}
