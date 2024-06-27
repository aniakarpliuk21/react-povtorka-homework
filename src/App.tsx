import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import FooterComponent from "./components/footer/FooterComponent";

const App = () => {
    return (
        <div>
          <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

export default App;