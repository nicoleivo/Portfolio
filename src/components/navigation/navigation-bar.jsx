import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './_navigation.styles.scss'

const NavigationBar = () => {
    const [links, setLinks] = useState(false);

    const navbarHandler = () => {
        setLinks(!links)
    }
    return (
        <>
        <header className="header-container">
        <Link className="logo text-flicker-in-glow pulsate-fwd" to='/'>
            NL
        </Link>
        <nav>
            {/* {links && ( */}
                <div className={`${links ? ('checked') : ('unchecked')} nav-inner`}>
                    <ul>
                        <li><Link  className='links' to='/'>Home</Link></li>
                        <li><Link className='links' to='/portfolio'>Portfolio</Link></li>
                        <li><Link className='links' to='/about'>About me</Link></li>
                        <li><Link className='links' to='/music'>Music</Link></li>
                        <li><Link className='links' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            {/* )} */}
            <div className="burger-selector" onClick={navbarHandler}>
                <input type="checkbox" id="btnControl"/>
                <label className="btn" htmlFor="btnControl">
                    <span className="arrow-menu">
                        <span className="arrow-inner">
                            <span className="burger-line line-top"></span>
                            <span className="burger-line line-bottom"></span>
                        </span>
                    </span>
                </label>
            </div>
        </nav>
        </header>
        <Outlet />
    </>
    )
}

export default NavigationBar