import React from 'react'
import { Link } from 'react-router-dom'
import './_contact.styles.scss'

import img from '../../images/13A4F5FA-EC62-41F8-85AC-D4376A4F25BD.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const envelope = <FontAwesomeIcon icon={faEnvelope} />;
    const github = <FontAwesomeIcon icon={faGithub} />;
    // const instagram = <FontAwesomeIcon icon={faInstagram} />;

    return (
        <section id="contact">
            <div className="img-container">
                <img src={img} alt="Me" height="250px"/>
            </div>
            <div className="contact-container">
                <h2>I'm available for freelance work.</h2>
                <Link 
                    to="mailto:cucchiettinicolas@gmail.com" 
                    target="_blank">
                        cucchiettinicolas@gmail.com
                        <span className='email'>{envelope}</span>
                </Link>
                <Link 
                    to="https://github.com/nicoleivo"  
                    target="_blank">
                        GitHub
                        <span className="github">{github}</span>
                </Link>
                
                {/* <Link 
                    to="https://instagram.com/_leivo" 
                    target="_blank">
                        Instagram
                        <span className="instagram">{instagram}</span>
                </Link> */}
            </div>
        </section>
    )
}

export default Contact