import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import counterReducer from '../slices/counterSlice';
import { usersApi } from '../services/usersApi';
import { productsApi } from '../services/productsApi';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, productsApi.middleware)

});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 