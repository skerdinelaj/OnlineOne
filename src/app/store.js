import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from "../features/todoSlice";
import thunk from 'redux-thunk';

const reducer = combineReducers({
    taskTodos: todoReducer,
})

const persistConfig = {
    key: "root",
    version: 1,
    storage
}


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})