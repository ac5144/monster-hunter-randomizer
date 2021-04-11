import React from 'react';
import { useDispatch } from 'react-redux';

export default function WeaponRandomizer({
    setCurrentItem,
    setPreviousItem,
    setShuffle,
    currentItem,
    previousItem,
    shuffle,
    noRepeats,
    itemPool,
    items
}) {
    const dispatch = useDispatch();

    const startShuffle = () => {
        if (shuffle) { return; }

        dispatch(setShuffle(true));
        dispatch(setPreviousItem(currentItem));

        const shuffleInterval = setInterval(() => {
            let newItem = currentItem;

            while (newItem === currentItem) {
                newItem = items[Math.floor(Math.random() * items.length)];
            }

            dispatch(setCurrentItem(newItem));
        }, 100);

        const shuffleTimeout = setTimeout(() => {
            clearInterval(shuffleInterval);
            dispatch(setShuffle(false));
            setRandomItem();
        }, 3000);

        return shuffleTimeout;
    };

    const setRandomItem = () => {
        let newItem;

        do {
            newItem = itemPool[Math.floor(Math.random() * itemPool.length)];
        } while (noRepeats && newItem === previousItem);

        dispatch(setCurrentItem(newItem));
    }

    return (
        <div>
            <div>{currentItem}</div>
            <button 
                onClick={startShuffle}
                disabled={shuffle}>
                Randomize
            </button>
        </div>
    );
} 