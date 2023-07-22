import {IServer} from "../../models/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchServers} from "./ServersCreators";

interface ClientState {
    servers: IServer[];
    isLoading: boolean;
    error: string;
}

const initialState: ClientState = {
    servers: [],
    isLoading: false,
    error: '',
}

export const serverSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchServers.fulfilled.type]: (state, action: PayloadAction<IServer[]>) => {
            state.isLoading = false;
            state.error = '';
            state.servers = action.payload
        },
        [fetchServers.pending.type]: (state) => {
            state.isLoading = true;

        },
        [fetchServers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }

})

export default serverSlice.reducer;