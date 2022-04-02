import React, { useContext } from 'react';
import { RingContex } from '../Ghandpaa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContex);

    const handleHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h2>Aunty...</h2>
            <p>House:{house}</p>
            <button onClick={handleHouse} >IncreaseHouse</button>
        </div>
    );
};

export default Aunty;