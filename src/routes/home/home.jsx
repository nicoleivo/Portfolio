import React from 'react'
import { Outlet } from 'react-router-dom'

import img from '../../images/13A4F5FA-EC62-41F8-85AC-D4376A4F25BD.jpg'

const Home = () => {
    return (
        <>
            <Outlet />
            <main id="home">
                <div className="img-container">
                    <img src={img} alt='Me' height='400px'/>
                </div>
                <div className="h1-container hvr-float-shadow">
                    <h1 className="hvr-buzz-out">Hi!</h1>
                </div>
            </main>
        </>
    )
}

export default Home