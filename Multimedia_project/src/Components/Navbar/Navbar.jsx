import React from 'react';
import '../../App';
import Content from '../../Images/Content.svg';
import logo from '../../Images/Logo.svg'
// import Header_bg from '../../Images/Header_bg.svg'
import '../Navbar/Navbar.css'


function Navbar() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 

    return (
      <div className="Navbar">
        <div className='Navbar-bg'>
            {/* <img src={Header_bg}/> */}
        <div className='header'>
            <div className='header_logo'>
                
               <img src={logo}/>
               <p>SaaSup</p>
            </div>
            <div className='header-menu'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
            <div className='header-button'>
                <button type="submit" onClick={open}>Sign In</button>
            </div>
        </div>
        <div className='header-content'>
            <div className='header-content-left'>
                <h1>Build your <br/> audience and <br/> grow your brand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit <br/> interdum ullamcorper sed pharetra sene.</p>
                <div className='header-content-left-buttons'>
                    <button className='header-content-left-button-1'>Get Started</button>
                    <button className='header-content-left-button-2'>Watch video</button>
                </div>
            </div>
            <div className='header-content-right'>
                    <img src={Content}/>
            </div>
        </div>

        </div>
      </div>
    );
  }

  export default Navbar;