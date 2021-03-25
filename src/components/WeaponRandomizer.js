import React, { useState } from 'react';

export default function WeaponRandomizer() {

    const [shuffle, setShuffle] = useState(false);
    const [currentWeapon, setCurrentWeapon] = useState('None');

    const weapons = [
        'great sword', 'long sword', 'hammer', 'dual blades', 'sword and shield', 'light bowgun', 'heavy bowgun', 
        'hunting horn', 'insect glaive', 'bow', 'charge blade', 'switch axe', 'lance', 'gun lance'
    ];

    const startShuffle = () => {
        if (shuffle) { return; }

        setShuffle(true);

        const shuffleInterval = setInterval(() => {
            const newIndex = Math.floor(Math.random() * weapons.length);
            setCurrentWeapon(weapons[newIndex]);
        }, 200);

        return shuffleInterval;
    };

    const randomizeBtn = () => {
        const shuffleInterval = startShuffle();

        setTimeout(() => {
            clearInterval(shuffleInterval);
            setShuffle(false);
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