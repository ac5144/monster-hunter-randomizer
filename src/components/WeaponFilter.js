import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setNoRepeats, setWeaponPool } from '../redux/features/weaponsSlice';

import { WEAPONS } from '../static';

export default function WeaponFilter() {
    const dispatch = useDispatch();

    const { weaponPool } = useSelector(state => state.weapons);

    const handleNoRepeats = (event) => {
        dispatch(setNoRepeats(event.target.checked));
    };

    const handleWeaponToggle = (event, weaponName) => {
        let filteredWeaponPool;

        if (!event.target.checked) {
            filteredWeaponPool = weaponPool.filter(weapon => weapon !== weaponName);
        } else {
            filteredWeaponPool = [...weaponPool, weaponName];
        }

        dispatch(setWeaponPool(filteredWeaponPool));
    };

    const weaponToggles = WEAPONS.map(weapon =>
        <div className="weaponToggle">
            <input type="checkbox" defaultChecked onChange={event => {
                handleWeaponToggle(event, weapon);
            }}/>
            <label>{weapon}</label>
        </div>
    )

    return (
        <div className="weaponFilter">
            <input type="checkbox" onChange={handleNoRepeats} />
            <label>No repeats</label>
            {weaponToggles}
        </div>
    );
}