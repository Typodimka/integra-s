import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {clientSlice} from "./clients/clientsSlice";
import {serverSlice} from "./servers/serversSlice";


const rootReducer = combineReducers({
    clientReducer: clientSlice.reducer,
    serverReducer: serverSlice.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']