import React from 'react'
import './Training.Styles.css';
import { Link } from 'react-router-dom';
import Moon from '../assets/espacio1.jpg';
import Pod from '../assets/espacio2.jpg';

const Training = () => {
  return (
    <div className='training'>
           <div className="left">
               <h1>Training</h1>
               <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
              <Link to='/contact'><button className='btn'>Contact</button></Link>
           </div>
           <div className="right">
               <div className="img-container">
                   <div className="image-stack top">
                       <img src={Moon} alt="Luna" className='img' />
                   </div>
                   <div className="image-stack bottom">
                       <img src={Pod} alt="Satelite" className='img' />
                   </div>
               </div>
           </div>
    
    </div>
  )
}

export default Training