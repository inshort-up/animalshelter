import React from "react";
import "./mainSection.css";
import { dog } from "../header/import";
import  { useState } from 'react';

function MainSection() {

  const [isActive, setIsActive] = useState('black');
  const handleClick = () => {
    setIsActive(current => !current);
  };
  
  return (
    <>
      <div className="container">
        <div className="main1">
          <div className="main2">
            <h4 className="mainhe"> Welcome to the Animal Shelter !</h4>
            <p className="para1">
              Glad that you care for the animals so much. We make sure that
              you’ll not repent your decision of adopting your favorite pet !!
            </p>
            <div className="btn-wrapper">
              <button
                className="btn1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Adopt
              </button>
              <button
                className="btn2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal222"
              >
                What all pets do we have ?
              </button>
            </div>
          </div>
          <img className="dogImag" src={dog} alt="helo" />
        </div>
      </div>

      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content formcol">
            <div className="modal-header border-0">
              <h5 className="modal-title formh5" id="">
                Adopt a pet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form">
                <div className="headim">
                  <h5>What pet do you want to adopt ?</h5>
                </div>
                <div className="headin ">
                  <label htmlFor="disabledSelect" className="form-label ">
                    Pet Type<span className="required">*</span>
                  </label>
                  <select id="disabledSelect" className="form-select">
                    <option>Dog</option>
                    <option>Cat</option>
                  </select>
                  <label htmlFor="disabledSelect " className="form-label mt-4">
                    Breed<span className="required">*</span>
                  </label>
                  <select id="disabledSelect" className="form-select">
                    <option>Lab</option>
                  </select>
                  <div className="details mt-4">
                    <div className="head">
                      <h5>Please fill in your details</h5>
                    </div>
                    <div className="fillup">
                      <form>
                        <div className="mb-3 mt-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label "
                          >
                            Full Name<span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email<span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password<span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btnf">
                REQUEST FOR ADOPTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal222"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body havep">
              <div className="havep1">
                <h4 className="havepe">What all pets do we have ?</h4>
              </div>
              <div className="fors d-inline-flex">
              <div className="buttonch leftbu ">
              <button type="button " className="btn btn-link" onClick={handleClick}
        style={{
          
          color: isActive ? 'black' : 'blue',
        }}
        >DOGS</button>
              </div>
              <div className="vr leftbu1"></div>
              <div className="chatsss leftbu1">
              <button type="button" className="btn btn-link">CATS</button>
              </div>
              </div>
              <table className="tablem1">
                <tr>
                  <th>Name</th>
                  <th>Breed</th>
                  <th>Age( months )</th>
                </tr>
                <tr>
                  <td>Lyka</td>
                  <td>Dasch</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Albie</td>
                  <td>Beagle</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Happy</td>
                  <td>Lab</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Ramu</td>
                  <td>Golden Retriever</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Pinky</td>
                  <td>Lab</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Sweetie</td>
                  <td>Beagle</td>
                  <td>21</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
