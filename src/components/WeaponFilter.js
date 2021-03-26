import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setNoRepeats } from '../redux/features/weaponsSlice';

export default function WeaponFilter() {
    const dispatch = useDispatch();

    const { noRepeats } = useSelector(state => state.weapons);

    const handleNoRepeats = (event) => {
        dispatch(setNoRepeats(event.target.checked));
    }

    return (
        <div className="weaponFilter">
            <input type="checkbox" onChange={handleNoRepeats} />
            <label>No repeats</label>
        </div>
    );
}