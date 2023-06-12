import React from 'react';
import '../../App';
import '../Fourth_block/Fourth_block.css';
import Background from '../../Images/Background.svg';

function Fourth_block() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 
    return (
        <div className='Fourth_block'>
            <div className='Fourth_block_left'>
                <div className='Fourth_block_left_top'>
                    <h2>Start your free trial <br/> today</h2>
                    <p>It is a long established fact that a reader will be <br/> by the readable when looking at it layout. </p>
                </div>
                <div className='Fourth_block_left_bottom'>
                    <textarea type="text" >your mail here...</textarea>
                    <div className='Fourth_block_left_bottom_button'>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='Fourth_block_right'>
                <img src={Background}></img>
            </div>
        </div>
    );
    }
    export default Fourth_block;