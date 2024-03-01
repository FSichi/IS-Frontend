import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* SLICES */
import { authSlice } from '../slices/auth';
import { complementosSlice } from '../slices/complementos';

const persistConfig = {
    key: 'auth',
    storage,
};

const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: authPersistedReducer,
        complementos: complementosSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
