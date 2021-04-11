import React from 'react';
import { useSelector } from 'react-redux';

import { setNoRepeats, setWeaponPool } from '../redux/features/weaponsSlice';

import Filter from './Filter';

import { WEAPONS } from '../static';

export default function WeaponFilter() {
    const { weaponPool } = useSelector(state => state.weapons);

    return (
        <Filter 
            setNoRepeats={setNoRepeats}
            setItemPool={setWeaponPool}
            itemPool={weaponPool}
            items={WEAPONS}
        />
    );
}