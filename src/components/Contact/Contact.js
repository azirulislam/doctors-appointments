import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h2 className='text-primary text-center mt-3'>Have some Quiestions!</h2>
            <p className='text-danger text-center '> Please contact us with here.</p>
            <div className='contact-form'>
            <form>
             <label htmlFor="">Your Name</label> <br />
             <input type="text" placeholder='name' /> <br />
             <label htmlFor="">Your Email</label> <br />
             <input type="text" placeholder=' email' /> <br /> 
             <label htmlFor=""> Message</label> <br />
             <input className='input' type="text" placeholder='write Your Message' /> <br />
             <button className='send-btn'>Send</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;