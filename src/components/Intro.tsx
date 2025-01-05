import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions';
import { IntroStrings } from '../strings/strings';
import { Page } from '../interfaces/page';

const Intro: React.FC = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(setPage(Page.Main));
    };

    return (
        <>
            <div className="title">{IntroStrings.title}</div>
            <button className="coming-soon-button" onClick={handleButtonClick}>{IntroStrings.buttonText}</button>
        </>
    );
};

export default Intro;