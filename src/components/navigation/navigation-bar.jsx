import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './_navigation.styles.scss'

const NavigationBar = () => {
    const [links, setLinks] = useState(false);

    const navbarHandler = () => {
        setLinks(!links)
    }

    const linkHandler = () => {
        setLinks(false)
    }

    return (
        <>
        <header className="header-container">
        <Link className="logo text-flicker-in-glow pulsate-fwd" to='/'>
            NL
        </Link>
        <nav className={links && ('sticky')}>
            {/* {links && ( */}
                <div className={`${links ? ('checked') : ('unchecked')} nav-inner`}>
                    <ul>
                        <li><Link  className='links' to='/' onClick={linkHandler}>Home</Link></li>
                        {/* <li><Link className='links' to='/portfolio' onClick={linkHandler}>Portfolio</Link></li> */}
                        <li><Link className='links' to='/about' onClick={linkHandler}>About me</Link></li>
                        <li><Link className='links' to='/music' onClick={linkHandler}>Music</Link></li>
                        <li><Link className='links' to='/contact' onClick={linkHandler}>Contact</Link></li>
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