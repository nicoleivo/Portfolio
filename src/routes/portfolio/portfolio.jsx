import React from 'react'
import { Link } from 'react-router-dom'
import './_portfolio.styles.scss'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="h2-container">My Portfolio</h2>
            <div className="portfolio-container">
                <div className="box">
                    <Link to="#">
                        <div className="web-img design-img"></div>
                        <h3>Design Studio</h3> 
                    </Link>
                </div>
                <div className="box">
                    <Link to="#">
                        <div className="web-img speaker-img"></div>
                        <h3>The Speaker Shop</h3> 
                    </Link>
                </div>
                <div className="box">
                    <Link to="#">
                        <div className="web-img wall-img"></div>
                        <h3>Grid Wall</h3> 
                    </Link>
                </div>
                <div className="box">
                    <Link to="#">
                        <div className="web-img travel-img"></div>
                        <h3>Travel Portal</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
};
    
export default Portfolio;