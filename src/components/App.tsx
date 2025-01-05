import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { Page } from '../interfaces/page';
import Intro from './Intro';
import Main from './Main';

const App: React.FC = () => {
    const currentPage = useSelector((state: any) => state.currentPage);

    return (
        <div className="container">
            {currentPage === Page.Main ? <Main /> : <Intro />}
        </div>
    );
};

export default App;