import { createSlice } from '@reduxjs/toolkit';

import { MONSTERS } from '../../static';

export const monstersSlice = createSlice({
    name: 'monsters',
    initialState: {
        currentMonster: 'None',
        previousMonster: 'None',
        shuffle: false,
        noRepeats: false,
        monsterPool: MONSTERS,
    },
    reducers: {
        setCurrentMonster(state, action) {
            state.currentMonster = action.payload;
        },
        setPreviousMonster(state, action) {
            state.previousMonster = action.payload;
        },
        setShuffle(state, action) {
            state.shuffle = action.payload;
        },
        setNoRepeats(state, action) {
            state.noRepeats = action.payload;
        },
        setMonsterPool(state, action) {
            state.monsterPool = action.payload;
        },
    }
});

export const {
    setCurrentMonster,
    setPreviousMonster,
    setShuffle,
    setNoRepeats,
    setMonsterPool,
} = monstersSlice.actions;

export default monstersSlice.reducer;