import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./interface";
import axios from "axios";

export const fetchData = createAsyncThunk("users/fetchData", async () => {
  const { data } = await axios.get(
    "http://127.0.0.1:4010/api/563.3166176528708/programs/incidunt/application-form"
  );
  return data?.data;
});
export const updateData: any = createAsyncThunk(
  "users/updateData",
  async (updatedData: any) => {
    // console.log(updatedData);
    // const { data } = await axios.put(
    //   "http://127.0.0.1:4010/api/79.85731805865184/programs/cupiditate/application",
    //   updatedData
    // );
    // console.log(data);
    // return data?.data;
    return updatedData.data
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;
export const getAppState = (state: any) => {
  return state?.app;
};

export const getProfile = (state: any) => {
  return state?.app?.attributes?.profile;
};
export const getPersonalInfo = (state: any) => {
  return state?.app?.attributes?.personalInformation;
};
export const getImage = (state: any) => {
  return state?.app?.attributes?.coverImage;
};
export const getCustomQuestion = (state: any) => {
  return state?.app?.attributes?.customisedQuestions;
};
export default appSlice.reducer;
