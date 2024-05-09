import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import contactpc from './images/Contact us.png';

const Contact = () => {
  const [input, setInput] = useState({ name: "", email: "", msg: "" });
  const myNav = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();


    let url = "http://localhost:4000/Message";
    axios.post(url, input).then((res) => {
      alert("Message Successfully Submitted !!!");
      myNav("/home");
    });
  }
  return (
    <>

      <div className='contact'>
        <img src={contactpc} className='cpix' />
        <div className="contactform">
          <form>
            <h1 class="h1 m-2">Connect with us!</h1>
            <i class='bx bxs-user' ></i>
            <input className="msg" placeholder="Enter Name" type="text" name="name" value={input.name} onChange={handleInput} required></input>
            <br />
            <i class='bx bxl-gmail' ></i>
            <input className="msg" placeholder="Enter Email" type="email" name="email" value={input.email} onChange={handleInput} required></input>
            <br />
            <i class='bx bxs-chat' ></i>
            <input className="msg" placeholder="Enter Message" type="text" name="msg" value={input.msg} onChange={handleInput} required></input>
            <br />

            <button className="submit" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <div className='details'>
        <i class='bx bxs-contact'></i><span>Email-info.ooty@theaccordhotels.com</span>
        <hr />
        <span>Website.-https://accordhighlandooty.org/</span>
        <hr />
        <span>Contact- +91 423 2450021
          <br/>
          +91 423 2450026</span>
          <hr/>
        <span>Address-4/278, Kotagiri Rd, Doddabetta Junction, Ooty, Tamil Nadu 643001</span>
      </div>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2846144814516!2d77.43031987477649!3d23.232727908453985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435605f269e1%3A0xe67446598d15ad0e!2sCybrom%20Technology%20-%20Python%20%7C%20Java%20%7C%20MERN%20%7C%20C%20C%2B%2B%20%7C%20Data%20Science%20%7C%20Machine%20Learning%20%7C%20Ethical%20Hacking%20%7C%20Job%20oriented%20Training!5e0!3m2!1sen!2sin!4v1702880124066!5m2!1sen!2sin" ></iframe>
      </div>
    </>
  )
}

export default Contact;