import React from 'react'
import "./mainSection2.css";
import {right } from '../header/import'



function MainSection2() {
  return (
   <>
   <div className="left container">
    <div className="head1">
        <div className="give">
            <h4 className='giveaway'>We do take in pets if you can’t take care of them !</h4>
            <p className="paraleft">Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb</p>
        </div>
        <div className="btn3 d-flex ">
            <button className='btnaway 'data-bs-toggle="modal" data-bs-target="#exampleModal12">Give Away</button>
        </div>
    </div>
    <div className="right">
    <div className="row">
    <div className="col-3">
    <img src={right} className="rightImage" alt="hello" />
    </div>
    <div className="col-9">
    <p className="rightpara">Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb</p>
    </div>
  </div>
        <div className="rightImage">
            {/* <img src={right} alt="hello" /> */}
        </div>
        <div className="rightSection">
            {/* <p className="rightpara">Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb</p> */}
        </div>
    </div>
   </div>
   <div
        className="modal fade "
        id="exampleModal12"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content formcol">
            <div className="modal-header border-0">
              <h5 className="modal-title formh5" id="">
              Give Away
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
                  <h5>What pet do you want to give away ?</h5>
                </div>
                <div className="headin ">
                  <label htmlFor="disabledSelect" className="form-label ">
                    Pet Type<span className="required">*</span>
                  </label>
                  <select id="disabledSelect" className="form-select">
                    <option>Cat</option>
                    <option>Dog</option>
                  </select>
                  <label htmlFor="disabledSelect " className="form-label mt-4">
                    Breed<span className="required">*</span>
                  </label>
                  <select id="disabledSelect" className="form-select">
                    <option>Persian cat</option>
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
              REQUEST FOR GIVE AWAY
              </button>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default MainSection2
