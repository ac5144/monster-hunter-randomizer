import React from 'react';
import { useDispatch } from 'react-redux';

import MainButton from './MainButton';

import './Randomizer.css';

export default function WeaponRandomizer({
    setCurrentItem,
    setPreviousItem,
    setShuffle,
    currentItem,
    previousItem,
    shuffle,
    noRepeats,
    itemPool,
    items,
    type,
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
    };

    return (
        <div className="Randomizer">
            <MainButton 
                onClick={startShuffle}
                buttonText="Randomize"
                disabled={shuffle}/>
            <img src={`/assets/images/${type}/${currentItem}.png`} alt={currentItem} />
        </div>
    );
} 