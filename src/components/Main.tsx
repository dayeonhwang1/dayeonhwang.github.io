import React from 'react';
import { MainStrings } from '../strings/strings';
import '../styles/Main.css';
import Footer from './Footer';
import Header from './Header';

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <div className="main-content">
                <div className="main-title">{MainStrings.title}</div>
                <div className="main-subtitle">{MainStrings.subtitle}</div>
            </div>
            <Footer />
        </>
    );
};

export default Main;