import React from 'react';
import { useSelector } from 'react-redux';

import { setNoRepeats, setMonsterPool } from '../redux/features/monstersSlice';

import Filter from './Filter';

import { MONSTERS } from '../static';

export default function MonsterFilter() {
    const { monsterPool } = useSelector(state => state.monsters);

    return (
        <Filter 
            setNoRepeats={setNoRepeats}
            setItemPool={setMonsterPool}
            itemPool={monsterPool}
            items={MONSTERS}
        />
    );
}