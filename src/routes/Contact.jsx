import React from 'react'
import Form from '../components/Form'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='CONTACT.' text='CONTACT GLX Travel'/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact;