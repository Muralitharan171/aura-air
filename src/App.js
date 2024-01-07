import React, { useState, useEffect } from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frostImage from "./Images/frost.png";
import realcommImage from "./Images/realcomm.png";
import smartbriefImage from "./Images/smartbrief.png";
import redDotImage from "./Images/reddot.png";
import carousel1Image from "./Images/corousel-1.jpg";
import carousel2Image from "./Images/corousel-2.jpg";
import carousel3Image from "./Images/corousel-3.jpg";
import carousel4Image from "./Images/corousel-4.jpg";
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
import leaf from "./Images/leaf.png";
import wifi from "./Images/wifi.png";
import wave from "./Images/wave.png";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    const menuList = document.querySelector(".topbar ul");
    if (menuList) {
      menuList.classList.toggle("active-menu");
      setMenuOpen(menuList.classList.contains("active-menu"));
      console.log("MenuList class list:", menuList.classList.toString());
    } else {
      console.log("MenuList not found");
    }
  };

  useEffect(() => {
    const menuButton = document.querySelector(".menu-toggle");
    if (menuButton) {
      menuButton.addEventListener("click", handleClick);
      console.log("Event listener added");
    } else {
      console.log("MenuButton not found");
    }

    return () => {
      if (menuButton) {
        menuButton.removeEventListener("click", handleClick);
        console.log("Event listener removed");
      }
    };
  }, []);

  return (
    <div className="App">
      <div className={`app-container ${menuOpen ? "menu-open" : ""}`}>
        <div
          type="submit"
          className="menu-toggle"
          onClick={() => handleClick()}
        >
          <span className="trigram"></span>
        </div>
        <button type="submit" className="contact-us-button">
          Contact us
        </button>
        <div className="topbar">
          <div className="sidebar">
            <button
              className="menu-toggle"
              style={{ width: "25px", height: "25px", fontSize: "20px" }}
              onClick={() => handleClick()}
            >
              <div className="trigram"></div>
              <div className="trigram"></div>
              <div className="trigram"></div>
            </button>
          </div>
          <nav>
            <ul className="menu-list">
              <a href="https://www.wiprolighting.com/products/new-offerings/aura-air">
                <i>Aura Air</i>
              </a>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li>
                <a href="#industries">Industries</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#store">Store</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="image-container">
          <div className="center-text">
            <b>Clean air, </b>
            <b>everywhere</b>
            <br></br>
            <button type="submit">Contact us</button>
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

      <div className="container-1">
        <div className="left-side">
          <h1>We are Aura Air</h1>
        </div>
        <div className="right-side">
          <p>
            We help improve people's health by helping them do the most
            basic,yet most important thing in life-breathe.our innovative air
            management system eliminates 99.9% of harmful particles while
            providing real-time data,insights,and recommendations.
          </p>
        </div>
      </div>

      <div className="container-2">
        <div className="box">
          <img src={leaf} alt="leaf" />
          <h2> Earn Green Building Standars</h2>
          <p>
            Our easy plug-and-play solution provides 7 points for
            WELL,LEED,REST, and fitwell certifications.
          </p>
        </div>
        <div className="box">
          <img src={wifi} alt="wifi" />
          <h2> BMS Connectivity</h2>
          <p>
            Connect Aura Air to your alexa,Google Assistant,IFTTT,or any other
            BMS for effortless operation.
          </p>
        </div>
        <div className="box">
          <img src={wave} alt="wave" />
          <h2> Boost Your ESG Strategy</h2>
          <p>
            take advantage of single system to enhance all your
            environmental,social and goverrnance factors.
          </p>
        </div>
      </div>

      <h1 className="head">A Complete air quality process</h1>
      <p className="head">For indoor spaces</p>
      <div className="container-3">
        <div className="column">
          <div className="row">
            <div className="cards one">
              <img src={airquality1} alt="airquality1" />
              <h1 className="txt-1">24/7 Monitoring</h1>
              <p className="txt-1">
                Tracks your indoor air quality with our innovitive device and
                smart sensord
              </p>
            </div>
          </div>

          <div className="row">
            <div className="cards two">
              <img src={airquality2} alt="airquality2" />
              <h1 className="txt-2">Real-Time Data & Analysis</h1>
              <p className="txt-2">
                See what's in your air and learn what factors control its
                quality
              </p>
            </div>
          </div>
          <div className="row">
            <div className="cards three">
              <img src={airquality3} alt="airquality3" />
              <h1 className="txt-1">Smart Purification Process</h1>
              <p className="txt-1">
                A 4 stage process that adapts according to its environment
              </p>
            </div>
          </div>
          <div className="row">
            <div className="cards four">
              <img src={airquality4} alt="airquality4" />
              <h1 className="txt-2">Customized Insights</h1>
              <p className="txt-2">
                Helping you manage your air quality with minimum effort and
                maximum protection
              </p>
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

      <div className="footer">
        <div className="column">
          <div className="row">WE ARE AURA AIR</div>
          <div className="row">About</div>
          <div className="row">Technology</div>
          <div className="row">Blog</div>
          <div className="row">News Room</div>
          <div className="row">Careers</div>
        </div>

        <div className="column">
          <div className="row">PRODUCTS</div>
          <div className="row">Aura Air</div>
          <div className="row">Aura Air Mini</div>
          <div className="row">Aura Web Platform</div>
          <div className="row">Accessories</div>
        </div>

        <div className="column">
          <div className="row">INDUSTRIES</div>
          <div className="row">Commercial Real Estate</div>
          <div className="row">Residential Real Estate</div>
          <div className="row">Education</div>
          <div className="row">Transportation</div>
          <div className="row">Health Care</div>
        </div>

        <div className="column">
          <div className="row">COMPANY</div>
          <div className="row">Support</div>
          <div className="row">Become A Distributor</div>
          <div className="row">Returns Policy</div>
          <div className="row">Investor Relation</div>
        </div>

        <div className="column">
          <div className="row">LET'S BE FRIENDS!</div>
          <div className="input-container">
            <input type="text" placeholder="Email address" />
            <div className="arrow">&#9658;</div>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="additional-row">
        <p className="para-end">2022.Aura Smart Air INC.Aura Smart Air LTD</p>
        <a href="terms">Terms</a>
        <a href="privacy">Privacy</a>
        <a href="accessibility">Accessibility</a>
      </div>
    </div>
  );
}

export default App;
