import { configureStore } from '@reduxjs/toolkit';

import weaponsReducer from '../features/weaponsSlice';
import monstersReducer from '../features/monstersSlice';

const store = configureStore({
    reducer: {
        weapons: weaponsReducer,
        monsters: monstersReducer,
    }
});

export default store;