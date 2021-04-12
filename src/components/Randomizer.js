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
    const [images, setImages] = useState({});

    useEffect(() => {
        const imagesObj = {};

        items.forEach(item => {
            const newImage = (<img src={`/assets/images/${type}/${item.id}.png`} alt={item.id} />);
            imagesObj[item.id] = newImage;
        });

        setImages(imagesObj);
    }, [items]);

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
            {shuffle ? images[displayItem.id] : images[currentItem.id]}
        </div>
    );
} 