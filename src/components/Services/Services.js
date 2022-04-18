import React from 'react';
import './Services.css';
import images from '../../images/services/images.jpg';
import images1 from '../../images/services/images1.jpg';
import images2 from '../../images/services/images2.jpg';

const Services = () => {
    return (
        <div>
        <h2 className='text-center mt-3 text-primary'>Think Healthy, Think Doctor</h2>
        <p className='text-center'>Some of online services</p>
            <div className="card-container d-flex mt-4">
      <div className='card'>
         <img className='card-img' src={images} alt="" />
          <h5 classname="card-title">Online Doctor</h5>
          <p> The sick people find a doctor from our online services.Me and my Doctor team give the health advice here. </p>
          <button className='card-btn'>Know more</button>
      </div>
      <div className='card'>
           <img className='card-img' src={images1} alt="" />
          <h5 classname="card-title">Medicine Store</h5>
          <p> In our medicine store have the all kind of medicine.You will find local and medicine here.</p>
          <button className='card-btn'>Know more</button>
        </div>
      <div className='card'>
        <img className='card-img' src={images2} alt="" />
         <h5 classname="card-title">Health App</h5>
          <p> We have a smartphone app.There you can find your healthy tips easily.download the app.</p>
          <button className='card-btn'>Know more</button>
       </div>
    </div>
        </div>
    );
};

export default Services;