import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

// Configuring the store with your slices
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;

// Export the store
export default store;
