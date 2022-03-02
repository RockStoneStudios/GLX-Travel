import React,{useState} from 'react'
import './Navbar.Styles.css';
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);


     const changeColor = ()=>{
        if(window.scrollY>= 100){
          setColor(true);
        }else{
          setColor(false);
        }
      
     }
     window.addEventListener('scroll',changeColor)
     
    const handleClick= ()=> setClick(!click);

    console.log(click)
    
  return (
    <div className={color ? 'header header-bg': 'header'}>
      <Link to='/'><h1>GLX TRAVEL</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/pricing'>Pricing</Link>
          </li>
          <li>
              <Link to='/training'>Training</Link>
          </li>
          <li>
              <Link to='/contact'>Contact</Link>
          </li>
      </ul>
       <div className='hamburger' onClick={handleClick}>
         {click ? (<FaTimes size={21} style={{color:'#fff'}}/>):( <FaBars size={22} style={{color:'#fff'}}/>)}
        
       </div>
    </div>
  )
}

export default Navbar