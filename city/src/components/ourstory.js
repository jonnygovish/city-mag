import React, { Fragment }from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import line1 from '../img/line1.png';
import './../styles.css';

class OurStory extends React.Component{
    state = {
    modal14: false
    }

    toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
        [modalNumber]: !this.state[modalNumber]
        });
    }


    render() {
        return(
            <div className="myStory">
                <div className="flex-center flex-column theStory">

                    <div className="col col-sm-7">
                        <h1 className="animated fadeIn mb-4 main ui">Our Story</h1>
                        <img src={line1} className="lines" alt="icon"/>
                        <h5 className="animated fadeIn mb-3 ui">
                            Our drive is out of a sheer desire of having what we want and how we
                            want it no matter what. It’s through the passion of seeking the ‘right one’
                            that we interacted with the issues individuals & couples were facing to
                            find specific services and needs for their events drumming up to the Big
                            Day having found their right soulmate for the journey.</h5>
                        <button type="button" className="btn btn-rounded find" onClick={this.toggle(14)} data-toggle="modal" data-target="#ourStory">Find out More</button>
                        <Fragment >

                            {/* <MDBBtn rounded color="warning" onClick={this.toggle(14)} className="find" >Find OUT MORE</MDBBtn> */}
                        </Fragment>
                    </div>
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg">
                        <MDBModalHeader toggle={this.toggle(14)} className="main"><h1>Our Story</h1></MDBModalHeader>
                        <MDBModalBody>
                            <h5>Our drive is out of a sheer desire of having what we want and how we want it
                                no matter what. It’s through the passion of seeking the ‘right one’ that we
                                interacted with the issues individuals & couples were facing to find specific
                                services and needs for their events drumming up to the Big Day having found
                                their right soulmate for the journey.</h5>
                            <h5>In this journey of searching for the ‘right one’ we created a tool to bring the
                                right team together in order to get ready for the journey ahead and achieve
                                that desired goal. Just to get doubt of the way:-</h5>
                            <ul class="myList">
                                <li><h5>We are a team making Kenyan & African luxury wedding and Events
                                    services easily accessible to the world.</h5></li>
                                <li><h5>We are passionate about rolling out the best in the industry to ensure a
                                    Wow event</h5></li>
                                <li><h5>We are celebrating the creative minds behind the services & products in
                                    our midst</h5>
                                    <ul class="myList">
                                        <li><h5>that speak for themselves and tell stories</h5></li>
                                        <li><h5>that capture your imagination and leave lasting memories</h5></li>
                                        <li><h5>that promote creative talent at its best</h5></li>
                                        <li><h5>that impact the audience and surrounding interactions</h5></li>
                                    </ul>
                                </li>
                            </ul>
                            <h5>Kenya as a destination wedding venue and needs the world to experience Her
                                true beauty coupled with the service providers who make the real visual
                                picture out stand any other.</h5>
                            <h5>We are working towards building the worlds most sought after & compelling
                                list of service providers in our Region</h5>
                            <h5>Most of all we are happy and proud that you are here and hope that you will
                                give us the chance to fulfill our drive through you. We hope you will give us
                                the chance to walk with you on the journey you are on as you work towards
                                your Success story - No matter what.</h5>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                        </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default OurStory;