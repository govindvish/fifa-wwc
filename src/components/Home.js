import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* <img style={{ height: "100%", width: "100%" }} src={dashboardImage} alt="display" /> */}
                <div className="text-center">
                    <p className="dashboard-content">Home</p>
                </div>
            </div>
        );
    }
}

export default Home;