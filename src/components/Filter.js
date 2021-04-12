import React from 'react';
import { useDispatch } from 'react-redux';

import './Filter.css';

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

    const handleItemToggle = (event, toggleItem) => {
        let filteredItemPool;

        if (!event.target.checked) {
            filteredItemPool = itemPool.filter(item => item.id !== toggleItem.id);
        } else {
            filteredItemPool = [...itemPool, toggleItem];
        }

        dispatch(setItemPool(filteredItemPool));
    };

    const itemTogglers = items.map(item =>
        <div className="FilterItem">
            <input 
                id={item.id} 
                type="checkbox" 
                defaultChecked 
                onChange={event => {
                    handleItemToggle(event, item);
            }}/>
            <label for={item.id}>{item.name}</label>
        </div>
    )

    return (
        <div className="Filter">
            <div>
                <input type="checkbox" onChange={handleNoRepeats} /> 
                <label>No repeats</label>
            </div>
            <div className="FilterGroup">
                {itemTogglers}
            </div>
        </div>
    );
}