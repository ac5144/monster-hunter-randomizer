import { createSlice } from '@reduxjs/toolkit';

import { WEAPONS } from '../../static';

export const weaponsSlice = createSlice({
    name: 'weapons',
    initialState: {
        currentWeapon: 'None',
        previousWeapon: 'None',
        shuffle: false,
        noRepeats: false,
        weaponPool: WEAPONS,
    },
    reducers: {
        setCurrentWeapon(state, action) {
            state.currentWeapon = action.payload;
        },
        setPreviousWeapon(state, action) {
            state.previousWeapon = action.payload;
        },
        setShuffle(state, action) {
            state.shuffle = action.payload;
        },
        setNoRepeats(state, action) {
            state.noRepeats = action.payload;
        },
        setWeaponPool(state, action) {
            state.weaponPool = action.payload;
        },
    }
});

export const {
    setCurrentWeapon,
    setPreviousWeapon,
    setShuffle,
    setNoRepeats,
    setWeaponPool,
} = weaponsSlice.actions;

export default weaponsSlice.reducer;