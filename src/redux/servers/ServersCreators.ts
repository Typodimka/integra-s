import axios from 'axios'
import {IServer} from "../../models/types";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchServers = createAsyncThunk(
    'client/fetchAllServer',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IServer[]>('./db/dbServers.json')
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Не удалось загрузить статус клиентов')
        }

    }
)
