import React from 'react';
import { MainStrings } from '../strings/strings';

const Main: React.FC = () => {
    return (
        <>
            <h2>{MainStrings.title}</h2>
            <p>{MainStrings.subtitle}</p>
        </>
    );
};

export default Main;