import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faYelp } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

export default function Contact() {
  return (
    <div className="Contact animate__animated animate__fadeIn animate__slow">
        <div className="hours">
            <h2>Hours</h2>
            <ul>
                <li>Mon&emsp;9:00AM - 7:00PM</li>
                <li>Tue&emsp;9:00AM - 7:00PM</li>
                <li>Wed&emsp;9:00AM - 7:00PM</li>
                <li>Thu&emsp;9:00AM - 7:00PM</li>
                <li>Fri&emsp;9:00AM - 7:00PM</li>
                <li>Sat&emsp;9:00AM - 7:00PM</li>
                <li>Sun&emsp;1:00PM - 7:00PM</li>
            </ul>
        </div>
        <ul className="contact-info">
            <li>
                <FontAwesomeIcon icon={faPhone} />&emsp;<a className="button" href="tel:910-867-8808">(910) 867-8808</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faBuilding} />&emsp;<a className="directions button" href="https://www.yelp.com/map/hair-story-salon-fayetteville" target="_blank" rel="noreferrer">Get Directions</a>
                <br />
                &emsp;&emsp;404 Santa Fe Dr.
                <br />
                <span className="address">&emsp;&emsp;Fayetteville, NC 28303</span>
                
            </li>
            <li>
                <FontAwesomeIcon icon={faYelp} size="lg" />&ensp;&ensp;<a className="button" href="https://www.yelp.com/biz/hair-story-salon-fayetteville" target="_blank" rel="noreferrer">Leave A Yelp Review</a>
            </li>
        </ul>
    </div>
  );
}