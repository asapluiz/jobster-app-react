import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from "../../utils/axios";
import { registerUserType, updateUserType, loginUserType, ErrorResponse, responseUser } from '../reduxTypes'


export const registerUser = createAsyncThunk<responseUser, registerUserType, { rejectValue: string }>(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post<responseUser>('/auth/register', user);
      return resp.data;
    } catch (error: unknown) {
      const typedError = error as ErrorResponse;
      return thunkAPI.rejectWithValue(typedError.response?.data?.msg || "unknown error");
    }
  }
);

export const loginUser = createAsyncThunk<responseUser, loginUserType, { rejectValue: string }>(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post<responseUser>('/auth/login', user);
      return resp.data;
    } catch (error: unknown) {
      const typedError = error as ErrorResponse;
      return thunkAPI.rejectWithValue(typedError.response?.data?.msg || "unknown error");
    }
  }
);

export const updateUser = createAsyncThunk<responseUser, updateUserType, { rejectValue: string }>(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post<responseUser>('/auth/updateUser', user);
      return resp.data;
    } catch (error: unknown) {
      const typedError = error as ErrorResponse;
      return thunkAPI.rejectWithValue(typedError.response?.data?.msg || "unknown error");
    }
  }
);

