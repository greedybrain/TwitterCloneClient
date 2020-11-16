import React from 'react'
import ProfileImageOpensAccountInfo from '../../App/components/ProfileImageOpensAccountInfo'
import './Explore.css'

const Explore = ({ setAccountInfoDisplayed }) => {
        const handleOnFocus = event => {
                const searchArea = event.target.parentElement.parentElement
                searchArea.style.backgroundColor = "#fff"
                searchArea.style.border = "1px solid #1DA1F2"
                searchArea.firstElementChild.firstElementChild.style.color = "#1DA1F2"
        }

        const handleBlur = event => {
                const searchArea = event.target.parentElement.parentElement
                searchArea.style.backgroundColor = "#6c849731"
                searchArea.style.border = "none"
                searchArea.firstElementChild.firstElementChild.style.color = "#657786"
        }
        return (
                <div className="explore_page_wrapper">
                        <header className='header'> 
                                <div className="image_and_label">
                                        <div className="image">
                                                <ProfileImageOpensAccountInfo setAccountInfoDisplayed={setAccountInfoDisplayed} />
                                        </div>
                                </div>
                                <div className="form_with_search_bar">
                                        <form>
                                                <div className="search_button">
                                                        <i className="fas fa-search"></i>
                                                </div>
                                                <div className="search_bar">
                                                        <input type="text" placeholder="Search Twitter" onFocus={handleOnFocus} onBlur={handleBlur}/>
                                                </div>
                                        </form>
                                </div>
                                <div className="header_icon">
                                        <i className="fas fa-cog"></i> 
                                </div>
                        </header>
                        <div className="explore_tabs">
                                <ul>
                                        <li>For You</li>
                                        <li>US Elections</li>
                                        <li>Trending</li>
                                </ul>
                        </div>
                        <div className="section_a">
                                <div className="a_content">
                                        <div className="a_head">
                                                <h3>Showing Context on Trends in Explore</h3>
                                        </div>
                                        <div className="inner_content_a">
                                                To make high quality information around the 2020 US elections more accessible, we're adding context to Trends and only displaying Trends with added context in the For you tab. <a href="https://google.com">Learn more</a>
                                        </div>
                                        <div className="got_it">
                                                <button>Got it</button>
                                        </div>
                                </div>
                        </div>
                        <div className="section_b">
                                <div className="overlay"></div>
                                <a href="https://www.jpl.nasa.gov/news/news.php?feature=7762" target='_blank' rel="noreferrer">
                                        <div className="article_image">
                                                <div className="article_info">
                                                        <div className="article_head">
                                                                NASA/JPL • 5 hours ago
                                                        </div>
                                                        <div className="article_body">
                                                                This Transforming Rover Can Explore the Toughest Terrain. Learn more
                                                        </div>
                                                        <div className="article_footer">
                                                                Trending with <span className="footer_content">NASA/JPL</span>
                                                        </div>
                                                </div>
                                        </div>
                                </a>
                        </div>
                        
                </div>
        )
}

export default Explore
