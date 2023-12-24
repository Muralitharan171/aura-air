import React from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import frostImage from './Images/frost.png';
import realcommImage from './Images/realcomm.png';
import smartbriefImage from './Images/smartbrief.png';
import redDotImage from './Images/reddot.png';
import carousel1Image from './Images/corousel-1.jpg';
import carousel2Image from './Images/corousel-2.jpg';
import carousel3Image from './Images/corousel-3.jpg';
import carousel4Image from './Images/corousel-4.jpg';
import CBRE from "./Images/CBRE.png";
import linkedin from "./Images/linkedin.png";
import Brookfield from "./Images/Brookfield.png";
import carr from "./Images/carr.png";
import chase from "./Images/chase.png";
import hilton from "./Images/hilton.png";
import airquality1 from "./Images/airquality1.png";
import airquality2 from "./Images/airquality2.png";
import airquality3 from "./Images/airquality3.png";
import airquality4 from "./Images/airquality4.png";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 2000 
  };
  return (
    <div className="App">
      
      <div className="app-container">
  <div className="topbar">
    <nav>
      <ul>
        <a href="https://www.wiprolighting.com/products/new-offerings/aura-air"><i>Aura Air</i></a>
        <li><a href="#home">Products</a></li>
        <li><a href="#about">Technology</a></li>
        <li><a href="#contact">Industries</a></li>
        <li><a href="#about">Support</a></li>
        <li><a href="#contact">Store</a></li>
        <a href="#contact">Contact us</a> 
      </ul>
    </nav>
  </div>
  <div className="image-container">
    <div className="center-text">
      <b>Clean air, </b>
      <b>everywhere</b>
    </div>
  </div>
</div>


    <div className="logos-row">
      <img src={CBRE} alt="Logo 1" className="logo" />
      <img src={linkedin} alt="Logo 2" className="logo" />
      <img src={Brookfield} alt="Logo 3" className="logo" />
      <img src={carr} alt="Logo 4" className="logo" />
      <img src={chase} alt="Logo 5" className="logo" />
      <img src={hilton} alt="Logo 6" className="logo" />
    </div>


    <div class="container-1">
  <div class="left-side">
    <h1>We are Aura Air</h1>
  </div>
  <div class="right-side">
    <p>We help improve people's health by helping them do the most basic,yet most important thing in life-breathe.our innovative air management system eliminates 99.9% of harmful particles while providing real-time data,insights,and recommendations.</p>
  </div>
</div>

<div class="container-2">
  <div class="box">
    <h2><span>&#x2605;</span> Earn Green Building Standars</h2>
    <p>Our easy plug-and-play solution provides 7 points for WELL,LEED,REST, and fitwell certifications.</p>
  </div>
  <div class="box">
    <h2><span>&#x2605;</span> BMS Connectivity</h2>
    <p>Connect Aura Air to your alexa,Google Assistant,IFTTT,or any other BMS for effortless operation.</p>
  </div>
  <div class="box">
    <h2><span>&#x2605;</span> Boost Your ESG Strategy</h2>
    <p>take advantage of single system to enhance all your environmental,social and goverrnance factors.</p>
  </div>
</div>

<h1 className="head">A Complete air quality process</h1>
  <p className="head">For indoor spaces</p>
<div className="container-3">
  
      <div className="column">
        <div className="row">
          <div className="cards one">
            <img src={airquality1} alt="airquality1" />
          </div>
        </div>
       
        <div className="row">
          <div className="cards two">
            <img src={airquality2} alt="airquality2" />
          </div>
          
      </div>
      <div className="row">
          <div className="cards three">
            <img src={airquality3} alt="airquality3" />
          </div>
      </div>
      <div className="row">
          <div className="cards four">
            <img src={airquality4} alt="airquality4" />
          </div>
      </div>
      </div>
      </div>
      



    <div className="image-section">
      <h1>Award Winning Technology and Design</h1>
      <div className="image-container-2">
        <div className="image-item">
          <img src={frostImage} alt="Description 1" />
          <h4>Frost & Sullivan</h4>
          <p>Entrepreneurial Company of the Year</p>
        </div>
        <div className="image-item">
          <img src={realcommImage} alt="Description 2" />
          <h4>Realcomm</h4>
          <p>Best Tech Innovation in Wellness Tech</p>
        </div>
        <div className="image-item">
          <img src={smartbriefImage} alt="Description 3" />
          <h4>SmartBrief</h4>
          <p>Innovation Award for the Business Traveler</p>
        </div>
        <div className="image-item">
          <img src={redDotImage} alt="Description 4" />
          <h4>Red Dot</h4>
          <p>Best Product Design Award</p>
        </div>
      </div>
    </div>


    <div className="card-carousel">
      <Slider {...settings}>
        <div className="card">
          <img src={carousel1Image} alt="Description 11" />
         
        </div>
        <div className="card">
          <img src={carousel2Image} alt="Description 22" />
        
        </div>
        <div className="card">
          <img src={carousel3Image} alt="Description 33" />
          
        </div>
        <div className="card">
          <img src={carousel4Image} alt="Description 44" />
          
        </div>
        </Slider>
</div>

<div className="contact-us">
<h1>Let's get started!</h1>
<p>Join the future of air purification</p>
<button type="submit">Contact Us</button>
</div>

<div class="footer">
 
  <div class="column">
    <div class="row">WE ARE AURA AIR</div>
    <div class="row">About</div>
    <div class="row">Technology</div>
    <div class="row">Blog</div>
    <div class="row">News Room</div>
    <div class="row">Careers</div>
  </div>

 
  <div class="column">
    <div class="row">PRODUCTS</div>
    <div class="row">Aura Air</div>
    <div class="row">Aura Air Mini</div>
    <div class="row">Aura Web Platform</div>
    <div class="row">Accessories</div>
  </div>

  
  <div class="column">
    <div class="row">INDUSTRIES</div>
    <div class="row">Commercial Real Estate</div>
    <div class="row">Residential Real Estate</div>
    <div class="row">Education</div>
    <div class="row">Transportation</div>
    <div class="row">Health Care</div>
  </div>


  <div class="column">
    <div class="row">COMPANY</div>
    <div class="row">Support</div>
    <div class="row">Become A Distributor</div>
    <div class="row">Returns Policy</div>
    <div class="row">Investor Relation</div>
  </div>


  <div class="column">
    <div class="row">LET'S BE FRIENDS!</div>
    <div class="input-container">
  <input type="text" placeholder="Email address" />
  <div class="arrow">&#9658;</div>
</div>
  </div>
  

   
  </div>
  <div class="line"></div>
  
  <div class="additional-row">
  <p class="para">2022.Aura Smart Air INC.Aura Smart Air LTD</p>
  <a href="terms">Terms</a>
  <a href="privacy">Privacy</a>
  <a href="accessibility">Accessibility</a>
 
  </div>
    </div>
   
  );
}

export default App;



