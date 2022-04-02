import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
import { useState } from 'react';


export const RingContex = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    return (
        <RingContex.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h1 >Grandpaa</h1>
                <p>House:{house}</p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>

            </div>
        </RingContex.Provider>

    );
};

export default Grandpa;