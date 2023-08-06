import React from 'react';
import "./NewsTips.css";

const NewsTips = () => {
    return (
        <div className="vehicle-tips-news-section">
        <h2>Vehicle Tips and News</h2>
        <div className="tips-carousel">
          <h3>Tips</h3>
          <div className="tips-content">
            <ul className="tips-list">
              <li>How to Improve Fuel Efficiency</li>
              <li>Top 10 Maintenance Checks for Your Car</li>
              <li>Winter Driving Safety Tips</li>
            </ul>
          </div>
        </div>
        <div className="news">
          <h3>News</h3>
          <ul>
            <li><a href="#">New Car Model Release</a></li>
            <li><a href="#">Upcoming Events</a></li>
            <li><a href="#">Industry Updates</a></li>
          </ul>
        </div>
      </div>
      
    );
};

export default NewsTips;