import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import {toast} from "react-toastify"
import { getUserFromLocalStorage, addUserToLocalStorage } from '../../utils/localStorage'
import { userStateType, responseUser } from '../reduxTypes'
import { registerUser, loginUser, updateUser } from './userThunk'



const initialState: userStateType = {
  isLoading: false,
  user: getUserFromLocalStorage()
}



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerUser.fulfilled, (state, action: PayloadAction<responseUser>) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello There ${user.name}`);
    })
    .addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    })

    .addCase(loginUser.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, {payload})=>{
      state.isLoading = false;
      const {user} = payload;
      state.user = user;
      addUserToLocalStorage(user)
      toast.success(`Hello There ${user.name}`);
    })
    .addCase(loginUser.rejected, (state, {payload})=>{
      state.isLoading = false;
      toast.error(payload);
    })


    .addCase(updateUser.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(updateUser.fulfilled, (state, {payload})=>{
      state.isLoading = false;
      const {user} = payload;
      state.user = user;
      addUserToLocalStorage(user)
      toast.success("updated successfully");

    })
    .addCase(updateUser.rejected, (state, {payload})=>{
      state.isLoading = false;
      toast.error(payload);
    })

  }


})


export default userSlice.reducer;