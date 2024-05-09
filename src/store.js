import { configureStore } from "@reduxjs/toolkit";
import guestReducer from "./guestloginSlice";
import adminReducer from "./adminSlice";

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }

const guestpersistedReducer = persistReducer(persistConfig, guestReducer);
const adminpersistedReducer = persistReducer(persistConfig, adminReducer);

export const  store=configureStore({
    reducer:{
        guestlogin:guestpersistedReducer,
        adminuser: adminpersistedReducer,
    }
});

export const persistor = persistStore(store);

export default store;