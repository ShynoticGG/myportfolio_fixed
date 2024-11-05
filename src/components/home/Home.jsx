import React from 'react';
import './Home.css';
import Me from '../../assets/profil.jpg';
import HeaderSocials from './HeaderSocials';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Skina Adonai</h1>
                <span className="home__education">I'm a CTRL+C CTRL+V  Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>
            </div>

        </section>
    )
}

export default Home