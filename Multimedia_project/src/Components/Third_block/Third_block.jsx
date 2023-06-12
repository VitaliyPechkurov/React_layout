import React from 'react';
import '../../App';
import '../Third_block/Third_block.css';
import Name from '../../Images/Name.svg';
import Star from '../../Images/Star.svg'


function Third_block() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 
    return (
        <div className='Third_block'>
            <div className='Third_block_button'>
                <button>Testimonial</button>
                <h2>Trusted by millions of creators.</h2>
                <h3>“</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have <br/> suffered alteration in some form, by injected humour, or randomised words which don't look <br/> even slightly believable. If you are going to use a passage .</p>
                <div className='Third_block_form'>
                    <img src={Name}></img>
                    <h4>Vitali Pechkurov</h4>
                    <p>Developer</p>
                    <div className='Third_block_form_star'>
                        <img src={Star}></img>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    export default Third_block;