import React from 'react';
import { useDispatch } from 'react-redux';

export default function Filter({
    setNoRepeats,
    setItemPool,
    itemPool,
    items,
}) {
    const dispatch = useDispatch();

    const handleNoRepeats = (event) => {
        dispatch(setNoRepeats(event.target.checked));
    };

    const handleItemToggle = (event, itemName) => {
        let filteredItemPool;

        if (!event.target.checked) {
            filteredItemPool = itemPool.filter(weapon => weapon !== itemName);
        } else {
            filteredItemPool = [...itemPool, itemName];
        }

        dispatch(setItemPool(filteredItemPool));
    };

    const itemTogglers = items.map(weapon =>
        <div>
            <input type="checkbox" defaultChecked onChange={event => {
                handleItemToggle(event, weapon);
            }}/>
            <label>{weapon}</label>
        </div>
    )

    return (
        <div>
            <input type="checkbox" onChange={handleNoRepeats} />
            <label>No repeats</label>
            {itemTogglers}
        </div>
    );
}