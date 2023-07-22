import axios from 'axios'
import {IClient} from "../../models/types";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchClients = createAsyncThunk(
    'client/fetchAllClient',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IClient[]>('./db/dbClients.json')
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Не удалось загрузить статус клиентов')
        }

    }
)
