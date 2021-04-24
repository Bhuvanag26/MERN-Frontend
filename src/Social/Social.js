import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import "../styles.css";


const Social = () => {
    return (
        <div className="social-container">
            <h3 className="social-title"> Follow Us:</h3>
            <a
            href=""
            className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
            href="https://www.instagram.com/bhuvanagarwal26"
            className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
            href="https://www.linkedin.com/in/bhuvan-agarwal-960932174/"
            
            className="fab-fa-linkedin social"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            
        </div>
    )
}

export default Social