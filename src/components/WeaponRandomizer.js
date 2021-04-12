import React from 'react';
import { useSelector } from 'react-redux';

import { setCurrentWeapon, setPreviousWeapon, setShuffle } from '../redux/features/weaponsSlice';

import Randomizer from './Randomizer';

import { WEAPONS } from '../static';

export default function WeaponRandomizer() {
    const { currentWeapon, previousWeapon, shuffle, noRepeats, weaponPool } = useSelector(state => state.weapons);

    return (
        <Randomizer
            setCurrentItem={setCurrentWeapon}
            setPreviousItem={setPreviousWeapon}
            setShuffle={setShuffle}
            currentItem={currentWeapon}
            previousItem={previousWeapon}
            shuffle={shuffle}
            noRepeats={noRepeats}
            itemPool={weaponPool}
            items={WEAPONS}
            type={'weapons'}
        />
    );
} 