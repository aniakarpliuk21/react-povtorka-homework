import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import FormComponent from "./components/formComponent/formComponent";

const App = () => {
    return (
        <div>
          <HeaderComponent/>
            <FormComponent/>
            <FooterComponent/>
        </div>
    );
};

export default App;