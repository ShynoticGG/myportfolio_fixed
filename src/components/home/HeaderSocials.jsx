import React from 'react';
import { FaGithub, FaLinkedinIn,  FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'><span></span>
            <a href='https://www.github.com/SkinaAdonai' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a><span></span>

            <a href='https://www.instagram.com/skina.adonai_/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a><span></span>

            <a href='https://www.linkedin.com/in/skina-adonai-54a04a286/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default HeaderSocials;
