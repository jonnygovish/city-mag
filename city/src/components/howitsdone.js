import React from "react";
import './../styles.css';
import line1 from '../img/line1.png';
import HowItsDoneModal from "./HowitsdoneModal";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import search from './../img/icons/search.png';
import quality from './../img/icons/quality.png';
import certified from './../img/icons/certified.png';

class HowItsDone extends React.Component{
    state = {
        modal14: false,
        modal15: false,
        modal16: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render(){
        return(
            <div style={{ height: "auto" }} id="done">
                <div className="flex-center flex-column  theBackground ">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 ">
                                <h1 className="animated fadeIn main">How It's Done</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <img src={line1} className="lines1" alt= 'line1'/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 ">
                                <h4 className="done">“It doesn't matter how crowded anything is. If you come in and you're
                                    cooler than the other kids on the playground, people will want to
                                    hang with you.”</h4>
                            </div>
                        </div>
                        {/* <HowItsDoneModal /> */}
                        < div className = "row justify-content-center others"> 
                            <div className="col-sm">
                                <img src={search} className="icons1" alt="icon1"/>
                                <h4 className="how">RESEARCHED & CONFIRMED</h4>
                                <p className="animated">We ensure each service provider and product is proven and tested to be factual and with the ability to deliver as stated. No sideshows and no
                                    undercutting gimmicks here.</p>
                                <button type="button" className="btn btn-rounded find" onClick={this.toggle(15)} data-toggle="modal" data-target="#researched">Read More</button>
                            </div>
                            {/* Researched and cofirmed modal */}
                                <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)} size="lg">
                                <MDBModalHeader toggle={this.toggle(15)}>Researched and Confirmed</MDBModalHeader>
                                <MDBModalBody>
                                    <p>We ensure each service provider and product is proven and tested to be factual and with the ability to deliver as stated. No sideshows and no undercutting gimmicks here.
                                    </p>
                                    <p>All service providers sign a code of surety and we seek recommendations from those they have shared experiences. All necessary checks are done and confirmed on your
                                        behalf including how many times they didn’t meet expectations.></p>

                                    <p><span style={{fontWeight:"900;"}}>Most of the suppliers reside on different platforms or physical addresses and it's rare to find one single location that offers EVERYTHING.</span></p>
                                    <p><span style={{fontWeight:"900;"}}>The City Ad Mag - we are Enlisting Reputable Brands just for your sake and ease.</span></p>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn color="secondary" onClick={this.toggle(15)}>Close</MDBBtn>
                                </MDBModalFooter>
                                </MDBModal>
                            
                            <div className="col-sm">
                                <img src={quality} className="icons1" alt="icon2"/>
                                <h4 className="how">QUALITY ASSURED</h4>
                                <p className="animated">For obvious reasons the market is saturated with event service providers but we aim to target those who feel they need an extra touch and commitment as
                                    a basis of value for their investment.</p>
                                <button type="button" className="btn btn-rounded find" onClick={this.toggle(14)} >Read More</button>
                            </div>
                             {/* Quality Modal */}
                            <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg">
                                <MDBModalHeader toggle={this.toggle(14)} id="exampleModalLabel">Quality Assured</MDBModalHeader>
                                <MDBModalBody>
                                    <p>For obvious reasons the market is saturated with event service providers but we aim to target those who feel they need an extra
                                    touch and commitment as a basis of value for their investment.
                                    </p>
                                    <p><span style={{fontWeight:"900;"}}>“It doesn't matter how crowded anything is. If you come in and you're cooler than the other kids on the playground, people will want to hang with you.”</span></p>
                                    <p>All vendors are based in Kenya and match their services to International standards. The quality of work is time tested with the number of years they have been
                                        in the business as well as their professional qualifications. </p>
                                    <p><span style={{fontWeight:"900;"}}>Individuals are increasingly demanding high levels of customization and personalization:
                                        they want a unique experience and a UNIQUE PRODUCT.</span></p>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>

                            <div className="col-sm">
                                <img src={certified} className="icons1" alt="icon3"/>
                                <h4 className="how">CERTIFIED BY BRAND</h4>
                                <p className="animated">Our goal is to represent only
                                    the BEST event professionals
                                    in the wedding industry.</p>
                                <button type="button" className="btn btn-rounded butt find" onClick={this.toggle(16)} data-toggle="modal" data-target="#certified">Read More</button>
                                {/* <MDBBtn color="warning" className="find" onClick={this.toggle(16)}>Read More</MDBBtn> */}
                            </div>
                            {/* Certified by brand modal */}

                            <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)} size="lg">
                                <MDBModalHeader toggle={this.toggle(16)} id="exampleModalLabel">Certified By brand</MDBModalHeader>
                                <MDBModalBody>
                                    <p>“We know you can’t obviously have time to screen hundreds of wedding service providers, so we do it for you. If you choose one listed in <span style={{fontWeight:"900;"}}>The City Ad Mag</span>, you’ll know they’re among the <span style={{fontWeight:"900;"}}>BEST</span> wedding industry professionals.
                                    <span style={{fontWeight:"900;"}}>Our goal is to represent only the BEST event professionals in the wedding industry</span>. In order to achieve this, we thoroughly screen all of the wedding vendors listed. That means you don't have to take a chance on some anonymous photographer, wedding planner or caterer.
                                    We've taken time and effort to pre-screen all the wedding vendors you’ll find. Every one of them has:</p>
                                <ol>
                                    <li>been in business for at least 3 years</li>
                                    <li>serviced at least 3 weddings or events</li>
                                    <li>proper licensing and/or insurance, if applicable</li>
                                    <li>submitted wedding references (from both wedding couples & fellow event pros)</li>
                                    <li>passed our rigorous pre-screening process with flying colors </li>
                                </ol>
                                <p>Our certification process requires each vendor to submit a reference list. We then contact each person ourselves to get their honest feedback. Only if the company gets excellent reviews do we list them on our publication, website and digital platforms.</p>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn color="secondary" onClick={this.toggle(16)}>Close</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItsDone;