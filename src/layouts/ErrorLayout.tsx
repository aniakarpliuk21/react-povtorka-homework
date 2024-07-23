import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <h2>Error Error Error</h2>
            <h1>Введіть вірну URL адресу</h1>
            <h2>Error Error Error</h2>
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;