import React from 'react';

function HomePage(){
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, flux and react router for ultra responsive web apps</p>

            <a href="/about" className="btn btn-primary btn-lg">About</a>
        </div>
    );
}

export default HomePage;