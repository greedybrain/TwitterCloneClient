import React, { Component } from 'react';
import Tweets from '../components/Tweets';
// import './Home.css'

class Home extends Component {
        render() {
                return (
                        <div className="home_wrapper">
                                <Tweets />
                        </div>
                );
        }
}

export default Home;