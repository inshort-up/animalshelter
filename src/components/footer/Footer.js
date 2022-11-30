import React from "react";
import "./footer.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../components/images/logo.png";

function Footer() {
  return (
    <>
      <div className="hrr">
        <div className="footer_div">
          <div className="hiv container d-flex">
            <div className="footer_logo">
              <img className="picff" src={logo} alt="" />
              <h4 className="leftfoo">ANIMAL SHELTER</h4>
              <div className="paralo">
                <p>
                  One of the best animal shelter places in India. We’re
                  recognized by the government. Please take a pledge to take
                  care of these lovely pets !
                </p>
                <button
                  className="buttonF"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Adopt
                </button>
              </div>
            </div>
            <div className="touch">
              <h4 className="touch1">GET IN TOUCH</h4>
              <GoLocation className="location" />
              <p className="locat">
                llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                woiwemfwokm fwe w ecen cloenwo we - 355233
              </p>
              <AiOutlineMail className="gmail" />
              <p className="locatmail">cisubdcusb@gmail.com</p>
              <h4 className="right12">FOLLOW US</h4>
              <div className="follow">
                <ul>
                  <li>
                    <BsTwitter />
                  </li>
                  <li>
                    <BsFacebook />
                  </li>
                  <li>
                    <BsLinkedin />
                  </li>
                </ul>
              </div>
            </div>
            <div className="links">
              <h4>Quick Links</h4>
              <p>HOME</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="hrf container">
          <hr className="remove"/>
          <div className="flast">
            <div className="fflast">
          <p>Copyright ©2023. Animal Shelter</p>
          </div>
          <div className="fpo">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li className="pr-0">Cookies Settings</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
