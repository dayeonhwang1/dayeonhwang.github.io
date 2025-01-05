import React from 'react';
import { MainStrings } from '../strings/strings';
import Header from './Header';
import './Main.css';

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <div className="main-content">
                <div className="main-title">{MainStrings.title}</div>
                <div className="main-subtitle">{MainStrings.subtitle}</div>
            </div>
        </>
    );
};

export default Main;