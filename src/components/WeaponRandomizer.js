import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentWeapon, setPreviousWeapon, setShuffle } from '../redux/features/weaponsSlice';

export default function WeaponRandomizer() {
    const dispatch = useDispatch();

    const { currentWeapon, previousWeapon, shuffle, noRepeats } = useSelector(state => state.weapons);

    const weapons = [
        'great sword', 'long sword', 'hammer', 'dual blades', 'sword and shield', 'light bowgun', 'heavy bowgun', 
        'hunting horn', 'insect glaive', 'bow', 'charge blade', 'switch axe', 'lance', 'gun lance'
    ];

    const startShuffle = () => {
        if (shuffle) { return; }

        dispatch(setShuffle(true));
        dispatch(setPreviousWeapon(currentWeapon));

        const shuffleInterval = setInterval(() => {
            let newWeapon = currentWeapon;

            while (newWeapon === currentWeapon) {
                newWeapon = weapons[Math.floor(Math.random() * weapons.length)];
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
            newWeapon = weapons[Math.floor(Math.random() * weapons.length)];
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