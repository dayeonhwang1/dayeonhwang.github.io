import React from 'react';
import { MainStrings } from '../strings/strings';
import Header from './Header';
import './Main.css';

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <div className="main-content">
                <h2>{MainStrings.title}</h2>
                <p>{MainStrings.subtitle}</p>
            </div>
        </>
    );
};

export default Main;