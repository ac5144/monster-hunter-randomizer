import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentWeapon, setShuffle } from '../redux/features/weaponsSlice';

export default function WeaponRandomizer() {
    const dispatch = useDispatch();
    const { currentWeapon, shuffle} = useSelector(state => state.weapons);

    const weapons = [
        'great sword', 'long sword', 'hammer', 'dual blades', 'sword and shield', 'light bowgun', 'heavy bowgun', 
        'hunting horn', 'insect glaive', 'bow', 'charge blade', 'switch axe', 'lance', 'gun lance'
    ];

    const startShuffle = () => {
        if (shuffle) { return; }

        dispatch(setShuffle(true));

        const shuffleInterval = setInterval(() => {
            let newWeapon = currentWeapon;

            while (newWeapon === currentWeapon) {
                const newIndex = Math.floor(Math.random() * weapons.length);
                newWeapon = weapons[newIndex];
            }

            dispatch(setCurrentWeapon(newWeapon));
        }, 100);

        return shuffleInterval;
    };

    const randomizeBtn = () => {
        const shuffleInterval = startShuffle();

        setTimeout(() => {
            clearInterval(shuffleInterval);
            dispatch(setShuffle(false));
        }, 3000);
    };

    return (
        <div>
            <div>{currentWeapon}</div>
            <button 
                onClick={randomizeBtn}
                disabled={shuffle}>
                Randomize
            </button>
        </div>
    );
} 