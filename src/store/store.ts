import {combineReducers, configureStore,} from "@reduxjs/toolkit";
import userReducer from './redusers/UserSlice';
import {postAPI} from "../services/PostService";



const rootReduser = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        devTools: true,
        reducer: rootReduser,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']