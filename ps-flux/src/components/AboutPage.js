import React from "react";

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
            <h2>About Page</h2>
            <p>This page uses react.</p>
            <a href="./HomePage" className="btn btn-primary btn-lg">Home</a>
            </React.Fragment>
        );
    }   
}

export default AboutPage;