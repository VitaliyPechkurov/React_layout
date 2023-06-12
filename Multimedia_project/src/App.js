
import './Components/Navbar/Navbar';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import First_block from './Components/First_block/First_block';
import'./Components/First_block/First_block';
import Second_block from './Components/Second_block/Second_block';
import'./Components/Second_block/Second_block';
import Third_block from './Components/Third_block/Third_block';
import'./Components/Third_block/Third_block';
import Fourth_block from './Components/Fourth_block/Fourth_block';
import'./Components/Fourth_block/Fourth_block';
import Footer from './Components/Footer/Footer';
import'./Components/Footer/Footer';
import Footer_bar from './Components/Footer_bar/Footer_bar';
import'./Components/Footer_bar/Footer_bar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <First_block></First_block>
      <Second_block></Second_block>
      <Third_block></Third_block>
      <Fourth_block></Fourth_block>
      <Footer></Footer>
     <Footer_bar></Footer_bar>
    </div>
  );
}

export default App;
