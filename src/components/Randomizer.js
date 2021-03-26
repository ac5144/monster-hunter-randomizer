import React from 'react';

import WeaponRandomizer from './WeaponRandomizer';
import WeaponFilter from './WeaponFilter';

import './Randomizer.css';

export default function Randomizer() {

    return(
        <div className="randomizerContainer">
            <WeaponRandomizer />
            <WeaponFilter />
        </div>
    )
}