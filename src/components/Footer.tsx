import React from 'react';
import { FooterStrings } from '../strings/strings';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-title">&copy; {new Date().getFullYear()} {FooterStrings.title}</div>
                <div className={"footer-subtitle"}>{FooterStrings.contain} {FooterStrings.contact}</div>
            </div>
        </footer>
    );
};

export default Footer;