import React from 'react';
import './Home.css';
import instruments from '../../images/instruments.jpg';
import sports1 from '../../images/health-tips/sports1.jpg';
import health from '../../images/health-tips/health.jpg';
import health2 from '../../images/health-tips/health2.jpg';

const Home = () => {
    return (
        <div >
        <div className='container mt-5'>
        <div>
            <h2>Better Doctor. <br /> Better Care. <br /> Everywhere.</h2>
             <p>Get unlimited free consultations with doctor any time.</p>
             <button className='section-btn'>Consultations now!</button>
        </div>
        <div>
            <img className='section-img' src={instruments} alt="" />
        </div>
    </div>
    <h2 className='text-center mt-5 text-primary'>Health Tips For You</h2>
      <div className="card-container d-flex mt-4">
      <div className='card'>
         <img className='card-img' src={sports1} alt="" />
          <h5 classname="card-title">Personilized Nutrition</h5>
          <p> Our Personilized nutrition food are right for you and supplements should be taking with diet plan. </p>
          <button className='card-btn'>Know more</button>
      </div>
      <div className='card'>
           <img className='card-img' src={health} alt="" />
          <h5 classname="card-title">Sports Nutrition</h5>
          <p> We are specializing in sports nutrition.Our sports nutrition team love the benefits of exercise bring.</p>
          <button className='card-btn'>Know more</button>
        </div>
      <div className='card'>
        <img className='card-img' src={health2} alt="" />
         <h5 classname="card-title">Weight Loss Programs</h5>
          <p> Weight loss process doesn't mean strive to body but make the eating process healthy.</p>
          <button className='card-btn'>Know more</button>
       </div>
    </div>
    </div> 

    );
};

export default Home;