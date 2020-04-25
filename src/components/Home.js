import React, { Component } from 'react';

import dashboardImage from '../assets/images/img2.jpg';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img style={{ height: "100%", width: "100%" }} src={dashboardImage} alt="display" />
                <div className="text-center">
                    <p className="dashboard-content">Immerse yourself in the history of the FIFA Women’s World Cup with our Classic section, revisiting all previous editions through Final highlights, iconic images, exclusive interviews from legends and more!</p>
                </div>
            </div>
        );
    }
}

export default Home;