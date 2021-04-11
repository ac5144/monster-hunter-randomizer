import React, { useState } from 'react';

export default function MHWScreen() {

    const [shuffle, setShuffle] = useState(false);
    const [currentWeapon, setCurrentWeapon] = useState('None');
    const weapons = [
        'great sword', 'long sword', 'hammer', 'dual blades', 'sword and shield', 'light bowgun', 'heavy bowgun', 
        'hunting horn', 'insect glaive', 'bow', 'charge blade', 'switch axe', 'lance', 'gun lance'
    ]

    return (
        <div>
            <div>{currentWeapon}</div>
            <button onClick={() => { 
                const newIndex = Math.floor(Math.random() * weapons.length);
                setCurrentWeapon(weapons[newIndex]);
            }}>
                Randomize
            </button>
        </div>
    );
} 