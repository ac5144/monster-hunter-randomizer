import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentWeapon, setPreviousWeapon, setShuffle } from '../redux/features/weaponsSlice';

import { WEAPONS } from '../static';

export default function WeaponRandomizer() {
    const dispatch = useDispatch();

    const { currentWeapon, previousWeapon, shuffle, noRepeats, weaponPool } = useSelector(state => state.weapons);

    const startShuffle = () => {
        if (shuffle) { return; }

        dispatch(setShuffle(true));
        dispatch(setPreviousWeapon(currentWeapon));

        const shuffleInterval = setInterval(() => {
            let newWeapon = currentWeapon;

            while (newWeapon === currentWeapon) {
                newWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
            }

            dispatch(setCurrentWeapon(newWeapon));
        }, 100);

        const shuffleTimeout = setTimeout(() => {
            clearInterval(shuffleInterval);
            dispatch(setShuffle(false));
            setRandomWeapon();
        }, 3000);

        return shuffleTimeout;
    };

    const setRandomWeapon = () => {
        let newWeapon;

        do {
            newWeapon = weaponPool[Math.floor(Math.random() * weaponPool.length)];
        } while (noRepeats && newWeapon === previousWeapon);

        dispatch(setCurrentWeapon(newWeapon));
    }

    return (
        <div>
            <div>{currentWeapon}</div>
            <button 
                onClick={startShuffle}
                disabled={shuffle}>
                Randomize
            </button>
        </div>
    );
} 