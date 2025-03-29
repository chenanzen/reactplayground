import React  from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App(){

    function getpage(){
        const route = window.location.pathname;
        if(route === '/courses') return <CoursesPage />;
        if(route === '/about') return <AboutPage />;
        return <HomePage />;
    }

    return (
        <div className='container-fluid'>
            <Header />
            {getpage()}
        </div>
    );
}

export default App;