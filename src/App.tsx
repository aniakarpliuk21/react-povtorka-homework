import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import UsersComponent from "./components/users/UsersComponent";

const App = () => {
    return (
        <div>
          <HeaderComponent/>
            <UsersComponent/>
            <FooterComponent/>
        </div>
    );
};

export default App;