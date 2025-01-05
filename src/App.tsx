import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Intro from './components/Intro';
import Main from './components/Main';
import { Page } from './interfaces/page';

const App: React.FC = () => {
    const currentPage = useSelector((state: any) => state.currentPage);

    return (
        <div className="container">
            {currentPage === Page.Main ? <Main /> : <Intro />}
        </div>
    );
};

export default App;