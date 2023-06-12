import React from 'react';
import '../../App';
import '../Second_block/Second_block.css';
import Icon1 from '../../Images/Icon1.svg';
import Detail from '../../Images/Detail.svg'

function Second_block() {
    function open(e)
    {
        e.preventDefault();
        console.log('You clicked');
    } 
    return (
        <div className='Second_block'>
              <div className='Second_block_left'>
                    <div className='Second_block_left_top'>
                        <h2>Powerful and easy to use <br/> saas builder platform</h2>
                        <p>It is a long established fact that a reader will be by the from <br/> readable content of a page when looking at its layout. The <br/> point of using lorem Ipsum.</p>
                    </div>
                    <div className='Second_block_left_bottom'>
                        <div className='Second_block_left_bottom_icon'>
                            <img src={Icon1}></img>
                        </div>
                        <div className='Second_block_left_bottom_text'>
                            <h5>Cost Effective</h5>
                            <p>Contrary to popular belief, Lore Ipsum <br/> is not simply random text. </p>
                        </div>
                    </div>
              </div>
              <div className='Second_block_right'>
                    <img src={Detail}></img>     
              </div>
        </div>
    );
    }
    export default Second_block;