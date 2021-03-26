import { configureStore } from '@reduxjs/toolkit';

import weaponsReducer from '../features/weaponsSlice';

const store = configureStore({
    reducer: {
        weapons: weaponsReducer,
    }
});

export default store;