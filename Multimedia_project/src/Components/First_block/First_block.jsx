import React from 'react';
import '../../App';
import Content from '../../Images/Content.svg';
import logo from '../../Images/Logo.svg'
// import Header_bg from '../../Images/Header_bg.svg'
import '../First_block/First_block.css';
import Card1 from '../../Images/Card1.svg';
import Card2 from '../../Images/Card2.svg';
import Card3 from '../../Images/Card3.svg';



function First_block() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 
    return (
      <div className='First_block'>
        <div className='First_block_top'>
            <div className='First_block_top_button'>
                <button type="submit" onClick={open}>Features</button>
            </div>
            <div className='First_block_top_text'>
                <h2>Powerful features to boost<br/> your productivity</h2>
            </div>
        </div>
        <div className='First_block_cards'>
            <div className='First_block_cards_1'>
                <img src={Card1}></img>
                <h4>Secured Platform</h4>
                <p>Contrary to popular belief, Lore Ipsum <br/> is not simply random text. It has roots <br/>in a piece.</p>
                <div className='First_block_link'>
                    <a href='#'>Learn more..</a>
                </div>   
            </div>
            <div className='First_block_cards_2'>
                <img src={Card2}></img>
                <h4>Advanced Analytics</h4>
                <p>Contrary to popular belief, Lore Ipsum <br/> is not simply random text. It has roots <br/>in a piece.</p>
                <div className='First_block_link'>
                    <a href='#'>Learn more..</a>
                </div> 
            </div>
            <div className='First_block_cards_3'>
                <img src={Card3}></img>
                <h4>Powerful Automation</h4>
                <p>Contrary to popular belief, Lore Ipsum <br/> is not simply random text. It has roots <br/>in a piece.</p>
                <div className='First_block_link'>
                    <a href='#'>Learn more..</a>
                </div> 
            </div>
        </div> 
      </div>  
    );
}

export default First_block;