import React from 'react';
import { useSelector } from 'react-redux';

import { setCurrentMonster, setPreviousMonster, setShuffle } from '../redux/features/monstersSlice';

import Randomizer from './Randomizer';

import { MONSTERS } from '../static';

export default function MonsterRandomizer() {
    const { currentMonster, previousMonster, shuffle, noRepeats, monsterPool } = useSelector(state => state.monsters);

    return (
        <Randomizer
            setCurrentItem={setCurrentMonster}
            setPreviousItem={setPreviousMonster}
            setShuffle={setShuffle}
            currentItem={currentMonster}
            previousItem={previousMonster}
            shuffle={shuffle}
            noRepeats={noRepeats}
            itemPool={monsterPool}
            items={MONSTERS}
        />
    );
}