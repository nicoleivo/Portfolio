import './_about.styles.scss'

import img from '../../images/photo_2021-11-12_14-32-15.jpg'

import { FaJs, FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs} from 'react-icons/fa'
import { SiRedux, SiSocketdotio, SiMongodb } from 'react-icons/si'

const About = () => {
    const html5 = <FaHtml5 />;
    const css3 = <FaCss3 />;
    const javascript = <FaJs />;
    const react = <FaReact />;
    const node = <FaNodeJs />;
    const redux = <SiRedux />;
    const socket = <SiSocketdotio />;
    const mongo = <SiMongodb />;
    const sass = <FaSass />;

    return (
        <>
            <section id="about">
                <div className="h2-container">
                    <h2>About Me</h2>
                </div>
                <div className="about-img"><img src={img} alt="Me"/></div>
                <div className="text-container">
                    <div className="about-text">I'm an artist native from Buenos Aires. I started travelling in 2016 and lived in New Zealand in 2017 for a year, where I decided Europe was my next destination. I ended up in Berlin by chance and fell in love with the city. The pandemic gave me an opportunity to reconsider where I want to be and the time to finally learn web-development, after a one year full stack web development course, I'm ready for new challenges and to start my freelance career!</div>
                </div>

                <div className="skill-container">
                    <h3>My Skills</h3>
                    <div className="icon-container">
                        <div>
                            <span className="html5">{html5}</span>
                            <span className="css3">{css3}</span>
                            <span className="js">{javascript}</span>
                            <span className="react">{react}</span>
                            <span className="node">{node}</span>
                        </div>
                        <div>
                            <span className="redux">{redux}</span>
                            <span className="socket">{socket}</span>
                            <span className="mongo">{mongo}</span>
                            <span className="sass">{sass}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About