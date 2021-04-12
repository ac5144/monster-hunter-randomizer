import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainButton from './MainButton';

import './Randomizer.css';

export default function Randomizer({
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
    const [displayItem, setDisplayItem] = useState(items[0]);

    useEffect(() => {
        cacheImages(items);
    }, []);

    const cacheImages = async (src) => {
        const promises = await src.map(s => {
            return new Promise((resolve, reject) => {
                const img = new Image();

                img.src = `/assets/images/${type}/${s.id}.png`;
                img.onload = resolve();
                img.onerror = reject();
            });
        });

        await Promise.all(promises);
    }

    const startShuffle = () => {
        if (shuffle) { return; }

        dispatch(setShuffle(true));
        dispatch(setPreviousItem(currentItem));

        const shuffleInterval = setInterval(() => {
            let newItem = currentItem;

            while (newItem.id === currentItem.id) {
                newItem = items[Math.floor(Math.random() * items.length)];
            }

            setDisplayItem(newItem);
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
        } while (noRepeats && newItem.id === previousItem.id);

        dispatch(setCurrentItem(newItem));
    };

    return (
        <div className="Randomizer">
            <MainButton 
                onClick={startShuffle}
                buttonText="Randomize"
                disabled={shuffle}/>
            <img src={`/assets/images/${type}/${shuffle ? displayItem.id : currentItem.id}.png`} alt={currentItem.id} />
        </div>
    );
} 