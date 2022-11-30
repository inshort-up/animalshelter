import React from "react";
import "./nav.css";
import { logo, inn, tw, ig } from "./import";



function Nav() {
  return (
    <div className="container-fluid">
    
      <div className="main">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" style={{width:"35px",height:"35px"}}/>
            <h4 className="logoName">ANIMAL SHELTER </h4>
          </div>
          <nav className="navbar navbar-expand-lg  ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse homenav"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active homec" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link homecu" href="/">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            
          </nav>
          <div className="social">
            <img src={inn} alt="" />
            <img src={tw} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
