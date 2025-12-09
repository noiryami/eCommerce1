import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import type {TProduct} from "@types";

type TResponse = TProduct[];


const actGetProductsById = createAsyncThunk(
  "products/actGetProductsById",
  async (_, thunkAPI) => {
      const { rejectWithValue, signal,} = thunkAPI;
    
    try {
      const response = await axios.get<TResponse>(
        `/products`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetProductsById;