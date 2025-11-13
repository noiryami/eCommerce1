import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import type { RootState } from "@store";
import type { TOrderItem } from "@types";

type TResponse = TOrderItem[];

const actGetOrders = createAsyncThunk("orders/actGetOrders", async (_, thunkAPI) => {
    const { getState, rejectWithValue, signal } = thunkAPI;
    const {auth}=getState()as RootState;
    try {
        const res = await axios.get<TResponse>(`/orders?userId=${auth.user?.id}`, { signal });

        return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})


export default actGetOrders