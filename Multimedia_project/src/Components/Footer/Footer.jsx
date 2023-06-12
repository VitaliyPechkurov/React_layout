import React from 'react';
import '../../App';
import '../Footer/Footer.css';
import logo from '../../Images/Logo.svg';
import Vector from '../../Images/Vector.svg';
import Phone from '../../Images/Phone.svg';

function Footer() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 
    return (
        <div className='Footer'>
            <div className='Footer_menu_1'>
                <div className='header_logo'>
                    
                    <img src={logo}/>
                    <p>SaaSup</p>
                </div>
                <div className='Footer_menu_list'>
                    <div className='Footer_menu_list_1'>
                        <p>It is a long established fact that from <br/> will be distracted by the readable <br/>from when looking.</p>
                    </div>
                    <div className='Footer_menu_list_2'>
                        <img src={Vector}/>
                        <p>saasup@gmail.com <br/>mail@saasup.com</p>
                    </div>
                    <div className='Footer_menu_list_3'>
                        <img src={Phone}/>
                        <p>+987 6541 3654<br/>+001 6547 6589</p>
                    </div>
                </div>
            </div>
            <div className='Footer_menu_2'>
                <h4>Pages</h4>
                <div className='Footer_menu_group_2'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                        <li>Features</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='Footer_menu_3'>
                <h4>Utility Pages</h4>
                <div className='Footer_menu_group_3'>
                    <ul>
                        <li>Password</li>
                        <li>Protected</li>
                        <li>404 Not Found</li>
                        <li>Style Guide</li>
                        <li>Licenses</li>
                        <li>Changelog</li>
                    </ul>
                </div>
            </div>
            <div className='Footer_menu_4'>
                <div className='Footer_menu_4_text'>
                    <h4>Its suitable to all <br/> decvices and screens</h4>
                    <p>It is a long established fact that a <br/> reader will be distracted layout.</p>
                </div>
                <div className='Footer_menu_4_button'>
                    <button className='Footer_menu_4_button_app'>App Store</button>
                    <button className='Footer_menu_4_button_andr'>Play Store</button>
                </div>   
            </div>
        </div>
    );
    }
    export default Footer;