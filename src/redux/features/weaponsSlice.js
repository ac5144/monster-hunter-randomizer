import { createSlice } from '@reduxjs/toolkit';

export const weaponsSlice = createSlice({
    name: 'weapons',
    initialState: {
        currentWeapon: 'None',
        shuffle: false,
        noRepeats: false,
    },
    reducers: {
        setCurrentWeapon(state, action) {
            state.currentWeapon = action.payload;
        },
        setShuffle(state, action) {
            state.shuffle = action.payload;
        },
        setNoRepeats(state, action) {
            state.noRepeats = action.payload;
        },
    }
});

export const {
    setCurrentWeapon,
    setShuffle,
    setNoRepeats,
} = weaponsSlice.actions;

export default weaponsSlice.reducer;