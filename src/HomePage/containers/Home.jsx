import React, { Component } from 'react';
import Tweets from '../components/Tweets';
import './Home.css'
// import '../../App/components/Header.css'
import ProfileImageOpensAccountInfo from '../../App/components/ProfileImageOpensAccountInfo';

class Home extends Component {
        render() {
                return (
                        <div className="home_wrapper">
                                <header className='header'> 
                                        <div className="image_and_label">
                                                <ProfileImageOpensAccountInfo setAccountInfoDisplayed={this.props.setAccountInfoDisplayed} />
                                                <div className="label">
                                                        <h2>Home</h2>
                                                </div>
                                        </div>
                                        <div className="header_icon">
                                                <i className="far fa-star"></i> 
                                        </div>
                                </header>
                                <Tweets />
                        </div>
                );
        }
}

export default Home;