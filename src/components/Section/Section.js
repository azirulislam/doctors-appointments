import React from 'react';
import './Section.css';
import instruments from '../../images/instruments.jpg'

const Section = () => {
    return (
        <div className='container'>
            <div>
                <h2>Better Doctor.Better Care.Everywhere.</h2>
                 <p>Get unlimited free consultations with doctor any time.</p>
                 <button className='section-btn'>Consultations now!</button>
            </div>
            <div>
                <img className='section-img' src={instruments} alt="" />
            </div>
        </div>
    );
};

export default Section;