import React, { useState, useEffect } from 'react';
import '../App.css';

const App = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3500); // Match the duration of the typing animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="title-container">
            <div className="title">Hi, I'm Dayeon Hwang.</div>
            {showButton && <button className="coming-soon-button">Coming Soon</button>}
        </div>
    );
};

export default App;