import React, { Component } from 'react';
import Header from '../components/common/Header';
import Planet from '../components/Planet';

class Dashboard extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="container" style={{maxWidth:'100%'}}>
                <Header />
                <Planet />
            </div>
        );
    }
}
export default Dashboard;