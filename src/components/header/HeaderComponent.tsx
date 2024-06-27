import React from 'react';
import HomePage from "../../pages/HomePage";
import AuthPage from "../../pages/AuthPage";
import './Header.css'
import ButtonComponent from "../button/ButtonComponent";

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <div className={'page'}><HomePage/></div>
            <div className={'page'}><AuthPage/></div>
            <ButtonComponent/>
        </div>
    );
};

export default HeaderComponent;